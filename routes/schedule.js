var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var scheduleController = require('../controllers/scheduleController');

router.post('/getSchedule/:routeName', upload.none(), scheduleController.getScheduleRoute);

module.exports = router;