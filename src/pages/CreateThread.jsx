import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createThreadThunkAction } from '../states/threadsAndUsers/action';
import { useNavigate } from 'react-router-dom';

function CreateThread() {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [category, setCategory] = React.useState('');
  const { created } = useSelector((state) => state.threadsAndUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createThreadThunkAction({ title, body, category }));
  };

  useEffect(() => {
    setTitle('');
    setBody('');
    setCategory('');
    if (created) {
      navigate('/');
    }
  }, [created]);
  return (
    <div className="create-thread">
      <h1>Membuat Thread Baru</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Judul</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            data-cy="title"
          />
        </div>
        <div>
          <label htmlFor="body">Isinya apa?</label>
          <textarea
            type="text"
            id="body"
            name="body"
            onChange={(event) => setBody(event.target.value)}
            value={body}
            data-cy="body-thread"
          />
        </div>
        <div>
          <label htmlFor="category">Kategori</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
            data-cy="category"
          />
        </div>
        <button
          type="submit"
          data-cy="button-create-thread"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateThread;
