const BASE_URL = '/api/comments/';

function get(id) {
  return fetch(BASE_URL + id).then(res => res.json());
}

function create(comment) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(comment)
  }).then(res => res.json());
}

function deleteOne(id) {
  return fetch(BASE_URL + id, {
    method: 'DELETE'
  }).then(res => res.json());
}

function update(comment) {
  return fetch(BASE_URL + comment._id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(comment)
  }).then(res => res.json());
}

export default {
  get,
  create,
  deleteOne,
  update
};
