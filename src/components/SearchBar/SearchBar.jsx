import React from 'react';
import styles from './SearchBar.module.scss';

function SearchBar(props) {
  return(
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={props.search}
        onChange={props.handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
