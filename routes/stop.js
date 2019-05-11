var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var stopController = require('../controllers/stopController');

router.post('/getStop/:routeName', upload.none(), stopController.getStopRoute);

module.exports = router;