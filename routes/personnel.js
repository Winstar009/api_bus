var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var personnelController = require('../controllers/personnelController');

router.post('/getPersonnelList/', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPersonnelList);

router.post('/getPersonnelListByCompany/:companyId', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPersonnelListByCompany);

router.post('/getPersonnelById/:personnelId', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPersonnelById);

router.post('/getPositionPersonnelById/:personnelId', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPositionPersonnelById);

router.post('/getPositionList/', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPositionList);

router.get('/', upload.none(), function(req, res, next) {
	res.render('personnelAll', { title: 'Персонал' });
});

router.get('/position/', upload.none(), function(req, res, next) {
	res.render('positionAll', { title: 'Должности' });
});

router.get('/company/:id', upload.none(), function(req, res, next) {
	res.render('personnelCompany', { title: 'Персонал компании' });
});

router.get('/:id', upload.none(), function(req, res, next) {
	res.render('personnel', { title: 'Персонал' });
});

module.exports = router;