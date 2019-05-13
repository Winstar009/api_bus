var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Bus v.0.77-4' });
});

router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Авторизация' });
});

module.exports = router;
