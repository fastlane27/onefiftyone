import React, { useState, useEffect } from 'react';
import PokemonFilter from '../../components/PokemonFilter/PokemonFilter';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Pagination from '../../components/Pagination/Pagination';

function PokemonListPage(props) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    search: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(20);

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
    setFilterOptions({...filterOptions, search: e.target.value});
  }

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNum) => setCurrentPage(pageNum)

  return (
    <div>
      <h1>Pokemon</h1>
      <PokemonFilter
        filterOptions={filterOptions}
        handleSearchChange={handleSearchChange}
      />
      {currentPokemon.map(pokemon =>
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.id}
        />
      )}
      <Pagination
        total={filteredPokemon.length}
        totalPerPage={pokemonPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default PokemonListPage;
