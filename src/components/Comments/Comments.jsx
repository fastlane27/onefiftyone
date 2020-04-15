import React from 'react';
import commentAPI from '../../services/commentAPI';

function Comments(props) {

  const handleDelete = async (commentId) => {
    await commentAPI.deleteOne(commentId);
    props.handleCommentChange();
  }

  return (
    <div>
      {props.comments.map(comment =>
        <div key={comment._id}>
          <h3>{comment.createdBy.name}</h3>
          <p>{comment.content}</p>
          <button onClick={() => handleDelete(comment._id)}>DELETE</button>
        </div>
      )}
    </div>
  );
}

export default Comments;
