import React, { useState } from 'react';
import styles from './CommentForm.module.scss';

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
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Leave a comment..."
          value={commentData.content}
          onChange={handleChange}
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
}

export default CommentForm;
