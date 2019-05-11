var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var routeController = require('../controllers/routeController');

router.post('/getRoutes', upload.none(), routeController.getRoutes);
router.post('/getRoute/:id', upload.none(), routeController.getRouteById);


router.get('/:id', function(req, res, next) {
	res.render('route', { title: 'Просмотр маршрута' });
});

module.exports = router;