import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCommentThunkAction,
  getThreadDetailThunkAction,
  upVoteByThreadDetailAsyncAction,
  downVoteByThreadDetailAsyncAction,
  neutralizeThreadVoteDetailAsyncAction,
} from '../states/detailThread/action';
import { useParams } from 'react-router-dom';
import formatDate from '../utils/formatdate';
import parse from 'html-react-parser';
import { FaThumbsUp, FaThumbsDown, FaCommentDots } from 'react-icons/fa';

function DetailThread() {
  const { thread, created } = useSelector((state) => state.threadDetail);
  const { profile } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [content, setContent] = React.useState('');
  const dispatch = useDispatch();

  const handleNeutralizeThreadVote = (threadId) => {
    dispatch(
      neutralizeThreadVoteDetailAsyncAction({
        threadId,
        userId: profile.id,
      }),
    );
  };

  const handleUpVoteThread = (threadId) => {
    if (!thread.upVotesBy.includes(profile.id)) {
      dispatch(upVoteByThreadDetailAsyncAction({
        threadId,
        userId: profile.id,
      }));
    } else {
      handleNeutralizeThreadVote(threadId);
    }
  };

  const handleDownVoteThread = (threadId) => {
    if (!thread.downVotesBy.includes(profile.id)) {
      dispatch(downVoteByThreadDetailAsyncAction({
        threadId,
        userId: profile.id,
      }));
    } else {
      handleNeutralizeThreadVote(threadId);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCommentThunkAction({ threadId: id, content }));
  };

  useEffect(() => {
    dispatch(getThreadDetailThunkAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (created) {
      dispatch(getThreadDetailThunkAction(id));
    }
  }, [created, dispatch, id]);

  return (
    <div className="detail-thread">
      <h1>Detail Thread</h1>
    </div>
  );
}

export default DetailThread;
