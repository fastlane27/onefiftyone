import React, { useState } from 'react';
import styles from './Comment.module.scss';
import CommentEdit from '../CommentEdit/CommentEdit';

function Comment(props) {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleEdit = () => {
    setIsVisible(!isVisible);
  }
  
  const dateCreated = new Date(props.comment.createdAt);

  return (
    <div className={styles.container}>
      <div className={styles.comment}>
        <div className={styles.name}>
          <h3>{props.comment.createdBy.name}</h3>
          {props.currentUser && props.currentUser._id === props.comment.createdBy._id &&
            <button onClick={() => toggleEdit()}>Edit</button>
          }
        </div>
        {isVisible ?
          <CommentEdit
            comment={props.comment}
            handleEditComment={props.handleEditComment}
            handleDeleteComment={props.handleDeleteComment}
            toggleEdit={toggleEdit}
          />
        :
          <>
            <p className={styles.content}>{props.comment.content}</p>
            <p className={styles.date}>{dateCreated.toLocaleString()}</p>
          </>
        }
      </div>
    </div>
  );
}

export default Comment;
