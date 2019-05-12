var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var routeController = require('../controllers/routeController');

router.post('/getRouteList', upload.none(), routeController.getRouteList);
router.post('/getRoute/:id', upload.none(), routeController.getRouteById);


router.get('/:id', function(req, res, next) {
	res.render('route', { title: 'Просмотр маршрута' });
});

router.get('/', function(req, res, next) {
	res.render('routeAll', { title: 'Маршруты' });
});

module.exports = router;