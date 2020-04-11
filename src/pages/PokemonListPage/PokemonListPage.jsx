import React from 'react';

function PokemonListPage(props) {
  return (
    <div>
      <h1>Pokemon</h1>
      {props.user ?
        <h3>Logged in as {props.user.name}</h3>
        :
        <h3>Not logged in.</h3>
      }
    </div>
  );
}

export default PokemonListPage;
