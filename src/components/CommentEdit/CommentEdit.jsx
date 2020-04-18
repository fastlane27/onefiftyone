import React, { useState } from 'react';

function CommentEdit(props) {
  const [commentData, setCommentData] = useState(props.comment);

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      content: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleEditComment(commentData);
    props.toggleEdit();
  }

  return (
    <div data-id={props.comment._id}>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentData.content}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => props.handleDeleteComment(props.comment._id)}>DELETE</button>
    </div>
  );
}

export default CommentEdit;
