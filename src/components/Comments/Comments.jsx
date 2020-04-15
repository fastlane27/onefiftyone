import React from 'react';

function Comments(props) {
  return (
    <div>
      {props.comments.map(comment =>
        <div key={comment._id}>
          <h3>{comment.createdBy.name}</h3>
          <p>{comment.content}</p>
          <button onClick={() => props.handleDeleteComment(comment._id)}>DELETE</button>
        </div>
      )}
    </div>
  );
}

export default Comments;
