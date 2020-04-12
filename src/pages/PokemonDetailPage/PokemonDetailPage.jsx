import React, { useState, useEffect } from 'react';
import { getOnePokemon } from '../../services/pokeapiService';

function PokemonDetailPage(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const result = await getOnePokemon(props.match.params.id);
        setPokemon(result);
      } catch(err) {
        console.log(err);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
}

export default PokemonDetailPage;
