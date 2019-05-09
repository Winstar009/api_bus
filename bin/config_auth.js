var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var crypto = require('crypto');

var authController = require('../controllers/authController');

var secret = 'MTW009S';

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secret;

var jwtAuth = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
	authController.findUserToken(jwt_payload).then(result => {
		next(null, result);
	});
});

passport.use(jwtAuth);

module.exports.passport = passport;
module.exports.secret = secret;

exports.decodingToken = function(req) {
	var token = req.headers['x-access-token'] || req.headers['authorization'];
	if (token.startsWith('Bearer ')) {
		token = token.slice(7, token.length);
	}
	var decoded = jwt.verify(token, secret);
	return decoded;
}