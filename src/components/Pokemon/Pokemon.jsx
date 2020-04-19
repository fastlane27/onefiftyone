import React from 'react';
import pokeAPI from '../../services/pokeAPI';

function Pokemon(props) {
  return (
    <div>
      <h1>{props.pokemon.name}</h1>
      <img
        src={`${pokeAPI.IMAGE_URL}${props.pokemon.id}.png`}
        alt={props.pokemon.name}
      />
    </div>
  );
}

export default Pokemon;
