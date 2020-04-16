const Comment = require('../models/comment');

module.exports = {
  create,
  show,
  delete: deleteOne,
  update
};

async function create(req, res) {
  try {
    req.body.createdBy = req.user._id;
    const comment = await Comment.create(req.body);
    await comment.populate('createdBy').execPopulate();
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
    const comment = await Comment.findById(req.params.id);
    if (comment.createdBy.equals(req.user._id)) {
      await comment.remove();
      res.status(200).json(comment);
    } else {
      res.status(401).json({err: 'Not Authorized'});
    }
  } catch(err) {
    res.status(500).json(err);
  }
}

async function update(req, res) {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});
    await updatedComment.populate('createdBy').execPopulate();
    res.status(200).json(updatedComment);
  } catch(err) {
    res.status(500).json(err);
  }
}
