const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const IMAGE_URL = 'https://pokeres.bastionbot.org/images/pokemon/'

function getAll() {
  return fetch(BASE_URL + '?limit=151').then(res => res.json());
}

function getOne(id) {
  return fetch(BASE_URL + id).then(res => res.json());
}

export default { 
  getAll,
  getOne,
  IMAGE_URL
};
