var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Bus v.0.75-2' });
});

router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Авторизация' });
});

router.get('/register', function(req, res, next) {
	res.render('register', { title: 'Регистрация' });
});

module.exports = router;
