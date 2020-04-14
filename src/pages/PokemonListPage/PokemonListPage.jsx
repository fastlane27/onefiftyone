import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonListPage.css';

function PokemonListPage(props) {
  return (
    <div>
      <h1>Pokemon</h1>
      {props.allPokemon.map((p, idx) =>
        <Link
          className="pokemon-link"
          to={'/pokemon/' + (idx + 1)}
          key={idx}
        >
          {p.name}
        </Link>
      )}
    </div>
  );
}

export default PokemonListPage;
