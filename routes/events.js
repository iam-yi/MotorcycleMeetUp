var express = require('express');
var router = express.Router();
const eventsCtrl = require('../controllers/events')
const isLoggedIn = require('../config/auth');

router.get('/', eventsCtrl.index);
router.get('/', eventsCtrl.new);
router.get('/:id', eventsCtrl.show);
router.post('/', isLoggedIn, eventsCtrl.create);
router.delete('/:id', eventsCtrl.delete);

module.exports = router;
