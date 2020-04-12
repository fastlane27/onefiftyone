const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = Schema({
  pokemonId: Number,
  name: String,
  image: String,
  users: [Schema.Types.ObjectId]
}, {
  timestamps: true
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
