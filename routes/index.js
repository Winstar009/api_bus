var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'v.0.74' });
});

router.get('/login', function(req, res, next) {
	res.render('login', { title: 'login' });
});

router.get('/register', function(req, res, next) {
	res.render('register', { title: 'register' });
});

router.get('/generate', function(req, res, next) {
	res.render('generate', { title: 'generate' });
});

module.exports = router;
