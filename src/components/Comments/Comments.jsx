import React from 'react';
import commentAPI from '../../services/commentAPI';

function Comments(props) {

  const handleDeleteComment = async (commentId) => {
    await commentAPI.deleteOne(commentId);
  }

  return (
    <div>
      {props.comments.map(comment =>
        <div>
          <h3>{comment.createdBy.name}</h3>
          <p>{comment.content}</p>
          <button onClick={() => handleDeleteComment(comment._id)}>DELETE</button>
        </div>
      )}
    </div>
  );
}

export default Comments;
