var jwt = require('jsonwebtoken');
var user = require('../models/authModel');
var config = require('../bin/config_auth');

function send(res, error, data) {
	var resData = new Object;
	if(error) {
		resData.error = error;
	}
	if(data){
		resData.data = data;
	}
	res.status(200);
	var str = JSON.stringify(resData);
	res.type('json').json(str);
}

exports.findUserToken = function(jwt_payload) {
	var id = jwt_payload.id;
	var login = jwt_payload.login;
	var password = jwt_payload.password;
	var authDate = jwt_payload.iat;

	return user.findUserToken(id, login, password).then(resultFindUser => {
		resultFindUser = resultFindUser.recordset;

		if(resultFindUser.length == 1) {
			if(resultFindUser[0].authDate == null){
				user.updateAuthDate(id, authDate).then(resultUpdateIat => {
					if(resultUpdateIat){
						return true;
					}
				});
			}
			else {
				if(resultFindUser[0].authDate == authDate){
					return true;
				}
				else {
					return false;
				}
			}
		}
	});
}

exports.userAuth = function(req, res, next) {
	var error;
	if(req.body.login != null && req.body.password != null){
		user.findUser(req.body.login, req.body.password).then(resultFindUser => {
			resultFindUser = resultFindUser.recordset;

			if(resultFindUser.length == 1) {
				var data = new Object;
				data.userName = resultFindUser[0].fio;

				var jwtsecret = config.secret;
				var payload = {
					id: resultFindUser[0].id,
					login: resultFindUser[0].login,
					password: resultFindUser[0].password
				};
				data.token = jwt.sign(payload, jwtsecret);

				user.updateAuthDate(resultFindUser[0].id, Math.floor(Date.now() / 1000)).then(resultUpdateAuthDate => {
					if(resultUpdateAuthDate){
						send(res, error, data);
					}
				});
			}
			else{
				send(res, "Неверный логин или пароль");
			}
		});
	}
	else{
		send(res, "Не все поля заполнены");
	}
};
