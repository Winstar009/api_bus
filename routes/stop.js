var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var stopController = require('../controllers/stopController');

router.post('/getStop/:routeId', upload.none(), stopController.getStopRoute);

router.post('/getStopList', upload.none(), stopController.getStopList);

router.get('/', upload.none(), function(req, res, next) {
	res.render('stopAll', { title: 'Остановки' });
});

module.exports = router;