import React from 'react';

function Pagination(props) {
  const pageNums = [];

  for(let i = 1; i <= Math.ceil(props.total / props.totalPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <ul>
      {pageNums.map(num => (
        <li
          onClick={() => props.paginate(num)}
          key={num}
        >
          {num}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
