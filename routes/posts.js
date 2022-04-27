const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.get('/', postsCtrl.index);
router.get('/', postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.post('/', isLoggedIn, postsCtrl.create);
router.delete('/:id', postsCtrl.delete);
router.get('/:id/comments/new', commentsCtrl.new);


module.exports = router;