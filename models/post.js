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
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [Schema.Types.ObjectId]
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
