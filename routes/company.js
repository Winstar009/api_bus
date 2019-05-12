var express = require('express');
var passport = require('passport');
var router = express.Router();

var multer  = require('multer');
var upload = multer();

var companyController = require('../controllers/companyController');

router.post('/getCompanyList', upload.none(), companyController.getCompanyList);
router.post('/getCompany/:id', upload.none(), companyController.getCompanyById);

router.get('/', function(req, res, next) {
	res.render('companyAll', { title: 'Компании' });
});

router.get('/:id', function(req, res, next) {
	res.render('company', { title: 'Просмотр компании' });
});

module.exports = router;