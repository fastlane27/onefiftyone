import React, { useState } from 'react';

function CommentForm(props) {
  const [commentData, setCommentData] = useState({
    content: '',
    pokemonId: props.pokemonId
  });

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddComment(commentData);
    setCommentData({...commentData, content: ''});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Leave a comment..."
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
