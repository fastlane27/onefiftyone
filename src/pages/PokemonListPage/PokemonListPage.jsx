import React, { useState, useEffect } from 'react';
import PokemonFilter from '../../components/PokemonFilter/PokemonFilter';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function PokemonListPage(props) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    search: ''
  });

  useEffect(() =>{
    setFilteredPokemon(props.allPokemon);
  }, [props.allPokemon]);

  useEffect(() => {
    const handleSearch = () => {
      setFilteredPokemon(props.allPokemon.filter(pokemon =>
        pokemon.name.includes(filterOptions.search.toLowerCase())));
    }
    handleSearch();
  }, [props.allPokemon, filterOptions.search]);

  const handleSearchChange = (e) => {
    setFilterOptions({search: e.target.value});
  }

  return (
    <div>
      <h1>Pokemon</h1>
      <PokemonFilter
        filterOptions={filterOptions}
        handleSearchChange={handleSearchChange}
      />
      {filteredPokemon.map(pokemon =>
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.name}
        />
      )}
    </div>
  );
}

export default PokemonListPage;
