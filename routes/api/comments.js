const router = require('express').Router();
const commentsCtrl = require('../../controllers/comments');

router.post('/', commentsCtrl.create);
router.get('/:id', commentsCtrl.show);
router.delete('/:id', commentsCtrl.delete);
router.put('/:id', commentsCtrl.update);

module.exports = router;
