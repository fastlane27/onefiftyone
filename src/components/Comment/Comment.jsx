import React from 'react';

function Comment(props) {
  return (
    <div>
      <h3>{props.comment.createdBy.name}</h3>
      <p>{props.comment.content}</p>
    </div>
  );
}

export default Comment;
