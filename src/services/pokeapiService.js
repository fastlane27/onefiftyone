const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

function getAllPokemon() {
  return fetch(BASE_URL + '?limit=151').then(res => res.json());
}

function getOnePokemon(id) {
  return fetch(BASE_URL + id).then(res => res.json());
}

export { 
  getAllPokemon,
  getOnePokemon
};
