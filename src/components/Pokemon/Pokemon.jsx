import React from 'react';
import styles from './Pokemon.module.scss';
import pokeAPI from '../../services/pokeAPI';

function Pokemon(props) {

  const PokemonType = () => {
    if (props.pokemon.name) {
      return (
        <div className={styles.type}>
          <h4>TYPE:</h4>
          <div>
            {props.pokemon.types.map(t =>
              <p key={t.type.name}>{t.type.name}</p>
            )}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  const PokemonStats = () => {
    if (props.pokemon.name) {
      return (
        <div className={styles.stats}>
          <h4>BASE STATS</h4>
          <table>
            <tbody>
              {props.pokemon.stats.slice().reverse().map(s =>
                <tr key={s.stat.name}>
                  <td>{s.stat.name}</td>
                  <td>{s.base_stat}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.pokemon}>
        <h1>{props.pokemon.name}</h1>
        <img
          src={`${pokeAPI.IMAGE_URL}${props.pokemon.id}.png`}
          alt={props.pokemon.name}
        />
      </div>
      <div className={styles.info}>
        <PokemonType />
        <PokemonStats />
      </div>
    </div>
  );
}

export default Pokemon;
