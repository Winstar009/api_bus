var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var userController = require('../controllers/userController');

router.post('/getUserInfo', passport.authenticate('jwt', { session: false}), upload.none(), userController.getUserInfo);

module.exports = router;