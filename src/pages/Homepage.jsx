/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from '../utils/formatdate';
import {
  getThreadsAndUsersThunkAction,
  upVoteByThreadAsyncAction,
  downVoteByThreadAsyncAction,
  neutralizeThreadVoteAsyncAction,
} from '../states/threadsAndUsers/action';
import { Link, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { FaThumbsUp, FaThumbsDown, FaCommentDots } from 'react-icons/fa';

function Homepage() {
  const { threads, users } = useSelector((state) => state.threadsAndUsers);
  const { isLogin, profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleNeutralizeThreadVote = (threadId) => {
    dispatch(
      neutralizeThreadVoteAsyncAction({
        threadId, userId: profile.id,
      }),
    );
  };

  const handleUpVoteThread = (threadId) => {
    const selectedThread = threads.find((thread) => thread.id === threadId);
    if (!selectedThread.upVotesBy.includes(profile.id)) {
      dispatch(upVoteByThreadAsyncAction({ threadId, userId: profile.id }));
    } else {
      handleNeutralizeThreadVote(threadId);
    }
  };

  const handleDownVoteThread = (threadId) => {
    const selectedThread = threads.find((thread) => thread.id === threadId);
    if (!selectedThread.downVotesBy.includes(profile.id)) {
      dispatch(downVoteByThreadAsyncAction({ threadId, userId: profile.id }));
    } else {
      handleNeutralizeThreadVote(threadId);
    }
  };

  useEffect(() => {
    dispatch(getThreadsAndUsersThunkAction());
  }, []);
  return (
    <div className="homepage">
      <h1>Forum Discussion</h1>
      <div>
        {threads.map((thread) => (
          <div className="discuss-box" key={thread.id}>
            <h1
              onClick={() => handleDetail(thread.id)}
              style={{ cursor: 'pointer' }}
            >
              {thread.title}
            </h1>
            <div className="user-info">
              <img src={users.find((user) => user.id === thread.ownerId).avatar} />
              <div className="user-info-detail">
                <p><b>{users.find((user) => user.id === thread.ownerId).name}</b></p>
                <p>{formatDate(thread.createdAt)}</p>
              </div>
            </div>
            <div className="among-button">
              <p
                className="thumbs-and-bubble"
                onClick={() => handleUpVoteThread(thread.id)}
              >
                <p>{thread.upVotesBy.length}</p>
                <FaThumbsUp />
              </p>
              <p
                className="thumbs-and-bubble"
                onClick={() => handleDownVoteThread(thread.id)}
              >
                <p>{thread.downVotesBy.length}</p>
                <FaThumbsDown />
              </p>
              <div className="thumbs-and-bubble">
                <p>{thread.totalComments}</p>
                <FaCommentDots />
              </div>
            </div>
            <p>{parse(thread.body)}</p>
          </div>
        ))}
        {isLogin && (
          <Link
            to="/create"
            className="add-thread"
            data-cy="add-thread"
          >
            Klik Untuk Menambah Thread
          </Link>
        )}
      </div>
    </div>
  );
}

export default Homepage;
