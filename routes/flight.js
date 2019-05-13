var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var flightController = require('../controllers/flightController');

router.post('/getFlightList', 
	passport.authenticate('jwt', { session: false }), upload.none(), 
	flightController.getFlightList);
router.post('/getFlight/:id', 
	passport.authenticate('jwt', { session: false }), upload.none(), 
	flightController.getFlightById);

router.get('/', function(req, res, next) {
	res.render('flightAll', { title: 'Рейсы' });
});

router.get('/:id', function(req, res, next) {
	res.render('flightPersonnel', { title: 'Просмотр рейса' });
});

module.exports = router;