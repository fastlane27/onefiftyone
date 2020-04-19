import React from 'react';

function SearchBar(props) {
  return(
    <div>
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
