const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');


router.get('/:id/comments', commentsCtrl.index);
router.get('/:id/comments/new', commentsCtrl.new);
// update
router.put('/:id/comments/:id', commentsCtrl.update);
router.post('/:id/comments', commentsCtrl.create);
router.get('/:id/comments/:id', commentsCtrl.show);
router.delete('/:id/comments/:id', commentsCtrl.delete);


module.exports = router;