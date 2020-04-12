const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    match: /\S/
  },
  createdBy: Schema.Types.ObjectId,
  pokemonId: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
