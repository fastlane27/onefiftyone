import React, { useState, useEffect } from 'react';
import styles from './PokemonListPage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Pagination from '../../components/Pagination/Pagination';

function PokemonListPage(props) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(20);

  useEffect(() =>{
    setFilteredPokemon(props.allPokemon);
  }, [props.allPokemon]);

  useEffect(() => {
    const handleSearch = () => {
      setFilteredPokemon(props.allPokemon.filter(pokemon =>
        pokemon.name.includes(search.toLowerCase())));
    }
    handleSearch();
  }, [props.allPokemon, search]);
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNum) => setCurrentPage(pageNum)

  return (
    <>
      <SearchBar
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <div className={styles.cardContainer}>
        {currentPokemon.map(pokemon =>
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.id}
          />
        )}
      </div>
      <Pagination
        total={filteredPokemon.length}
        totalPerPage={pokemonPerPage}
        paginate={paginate}
      />
    </>
  );
}

export default PokemonListPage;
