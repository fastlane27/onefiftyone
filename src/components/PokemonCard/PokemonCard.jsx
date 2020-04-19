import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.scss';
import pokeAPI from '../../services/pokeAPI';

function PokemonCard(props) {
  return (
    <Link to={'/pokemon/' + props.pokemon.id} className={styles.card}>
      <img
        src={`${pokeAPI.IMAGE_URL}${props.pokemon.id}.png`}
        alt={props.pokemon.name}
      />
      <h3>{props.pokemon.name}</h3>  
    </Link>
  );
}

export default PokemonCard;
