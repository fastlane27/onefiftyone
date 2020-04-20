import React, { useState } from 'react';
import styles from './CommentEdit.module.scss';

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
    <div data-id={props.comment._id} className={styles.edit}>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentData.content}
          onChange={handleChange}
        />
        <button type="submit" className={styles.save}>SAVE</button>
        <button 
          onClick={() => props.handleDeleteComment(props.comment._id)}
          className={styles.delete}
        >
          DELETE
        </button>
      </form>
    </div>
  );
}

export default CommentEdit;
