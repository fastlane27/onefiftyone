import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';

function PokemonCard(props) {
  return (
    <div>
      <Link
          className="pokemon-link"
          to={'/pokemon/' + props.pokemon.id}
        >
          {props.pokemon.name}
        </Link>
    </div>
  );
}

export default PokemonCard;
