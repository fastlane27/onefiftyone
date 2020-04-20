import React from 'react';
import styles from './Pagination.module.scss';

function Pagination(props) {
  const pageNums = [];

  for(let i = 1; i <= Math.ceil(props.total / props.totalPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <ul className={styles.pagination}>
      {pageNums.map(num => (
        <li
          onClick={() => props.paginate(num)}
          key={num}
          className={num === props.currentPage ? styles.current : null}
        >
          {num}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
