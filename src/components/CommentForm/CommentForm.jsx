import React, { useState } from 'react';

function CommentForm(props) {
  const [commentData, setCommentData] = useState({content: ''});

  const handleChange = (e) => {
    setCommentData({content: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddComment(commentData);
    setCommentData({content: ''});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Leave a comment..."
          value={commentData.content}
          onChange={handleChange}
          required
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
}

export default CommentForm;
