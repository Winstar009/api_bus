var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var busController = require('../controllers/busController');

router.post('/getBusList', upload.none(), busController.getBusList);
router.post('/getBusListByCompany/:companyId', upload.none(), busController.getBusListByCompany);
router.post('/getBusById/:busId', upload.none(), busController.getBusById);

router.post('/getServiceBusById/:busId', 
	passport.authenticate('jwt', { session: false }), upload.none(), 
	busController.getServiceBusById);

router.post('/getBusModelList', 
	passport.authenticate('jwt', { session: false }), upload.none(), 
	busController.getBusModelList);

router.post('/getBusBrandList', 
	passport.authenticate('jwt', { session: false }), upload.none(), 
	busController.getBusBrandList);

router.post('/getBusTypeList', 
	passport.authenticate('jwt', { session: false }), upload.none(), 
	busController.getBusTypeList);

router.post('/getBusStatusList', 
	passport.authenticate('jwt', { session: false }), upload.none(), 
	busController.getBusStatusList);

router.get('/company/:id', function(req, res, next) {
	res.render('busCompany', { title: 'Автопарк компании' });
});

router.get('/model/', function(req, res, next) {
	res.render('busModelAll', { title: 'Модели автотранспорта' });
});

router.get('/brand/', function(req, res, next) {
	res.render('busBrandAll', { title: 'Бренды автотранспорта' });
});

router.get('/type/', function(req, res, next) {
	res.render('busTypeAll', { title: 'Типы автотранспорта' });
});

router.get('/status/', function(req, res, next) {
	res.render('busStatusAll', { title: 'Статусы автотранспорта' });
});

router.get('/:id', function(req, res, next) {
	res.render('bus', { title: 'Автотранспорт' });
});

router.get('/', function(req, res, next) {
	res.render('busAll', { title: 'Автотранспорт' });
});



module.exports = router;