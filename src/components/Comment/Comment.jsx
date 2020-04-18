import React, { useState } from 'react';
import CommentEdit from '../CommentEdit/CommentEdit';

function Comment(props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleEdit = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <h3>{props.comment.createdBy.name}</h3>
      <button onClick={() => toggleEdit()}>Edit</button>
      {isVisible ?
        <CommentEdit
          comment={props.comment}
          handleEditComment={props.handleEditComment}
          handleDeleteComment={props.handleDeleteComment}
          toggleEdit={toggleEdit}
        />
      :
        <p>{props.comment.content}</p>
      }
    </div>
  );
}

export default Comment;
