const router = require('express').Router();
const commentsCtrl = require('../../controllers/comments');

router.get('/:id', commentsCtrl.show);
router.use(require('../../config/auth'));
router.post('/', checkAuth, commentsCtrl.create);
router.delete('/:id', checkAuth, commentsCtrl.delete);
router.put('/:id', checkAuth, commentsCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
