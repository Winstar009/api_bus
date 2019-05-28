var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var personnelController = require('../controllers/personnelController');

//Вывод всех сотрудников
router.post('/getPersonnelList/', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPersonnelList);

//Вывод компании по id
router.post('/getPersonnelListByCompany/:companyId', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPersonnelListByCompany);

//Вывод сотрудника по id
router.post('/getPersonnelById/:personnelId', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPersonnelById);

//Вывод списка должностей сотрудника по id
router.post('/getPositionPersonnelById/:personnelId', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
	personnelController.getPositionPersonnelById);

//Вывод всех должностей
router.post('/getPositionList/', 
	passport.authenticate('jwt', { session: false}), upload.none(), 
    personnelController.getPositionList);

//Добавление должности
router.post('/addPosition/',
    passport.authenticate('jwt', { session: false }), upload.none(),
    personnelController.addPosition);

//Удаление должности
router.post('/delPosition/:id',
    passport.authenticate('jwt', { session: false }), upload.none(),
    personnelController.delPosition);

//Обновление должности
router.post('/updPosition/',
    passport.authenticate('jwt', { session: false }), upload.none(),
    personnelController.updPosition);

//======================= Страницы =======================
//Сотрудники
router.get('/', upload.none(), function(req, res, next) {
	res.render('personnelAll', { title: 'Персонал' });
});

//Должности
router.get('/position/', upload.none(), function(req, res, next) {
	res.render('positionAll', { title: 'Должности' });
});

//Сотрудники компании
router.get('/company/:id', upload.none(), function(req, res, next) {
	res.render('personnelCompany', { title: 'Персонал компании' });
});

//Сотрудник
router.get('/:id', upload.none(), function(req, res, next) {
	res.render('personnel', { title: 'Персонал' });
});

module.exports = router;