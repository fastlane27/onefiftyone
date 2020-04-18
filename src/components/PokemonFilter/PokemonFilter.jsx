import React from 'react';

function PokemonFilter(props) {
  return(
    <div>
      <input
        type="text"
        placeholder="Search"
        value={props.filterOptions.search}
        onChange={props.handleSearchChange}
      />
    </div>
  );
}

export default PokemonFilter;
