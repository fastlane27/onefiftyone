import React from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function PokemonListPage(props) {
  return (
    <div>
      <h1>Pokemon</h1>
      {props.allPokemon.map((pokemon, idx) =>
        <PokemonCard
          pokemon={pokemon}
          pokemonId={idx + 1}
          key={pokemon.name}
        />
      )}
    </div>
  );
}

export default PokemonListPage;
