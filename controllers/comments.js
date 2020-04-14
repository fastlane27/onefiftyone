const Comment = require('../models/comment');

module.exports = {
  create,
  show,
  delete: deleteOne,
  update
};

async function create(req, res) {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch(err) {
    res.status(500).json(err);
  }
}

async function show(req, res) {
  try {
    const comments = await Comment.find({'pokemonId': req.params.id}).populate('createdBy');
    res.status(200).json(comments);
  } catch(err) {
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedComment);
  } catch(err) {
    res.status(500).json(err);
  }
}

async function update(req, res) {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedComment);
  } catch(err) {
    res.status(500).json(err);
  }
}
