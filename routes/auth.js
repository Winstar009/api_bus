var express = require('express');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

/* Controllers */
var authController = require('../controllers/authController');

router.post('/login', upload.none(), authController.userAuth);

module.exports = router;