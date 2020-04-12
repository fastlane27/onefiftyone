const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    match: /\S/
  },
  content: {
    type: String,
    required: true,
    match: /\S/
  },
  createdBy: Schema.Types.ObjectId,
  comments: [Schema.Types.ObjectId]
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
