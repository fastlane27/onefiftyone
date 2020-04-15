import React, { useState } from 'react';
import commentAPI from '../../services/commentAPI';

function CommentForm(props) {
  const [commentData, setCommentData] = useState({
    content: '',
    createdBy: props.currentUser._id,
    pokemonId: props.pokemonId
  });

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await commentAPI.create(commentData);
      setCommentData({...commentData, content: ''});
      props.handleCommentChange();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentData.content}
          name="content"
          onChange={handleChange}
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
}

export default CommentForm;
