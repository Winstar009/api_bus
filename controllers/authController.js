var jwt = require('jsonwebtoken');
var auth = require('../models/authModel');
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
    var permission = jwt_payload.permission;

    return auth.getPermission(id).then(resultPermission => {
        resultPermission = resultPermission.recordset[0];
        if (resultPermission.permission == permission) {
            return auth.findUserToken(id, login, password).then(resultFindUser => {
                resultFindUser = resultFindUser.recordset;

                if (resultFindUser.length == 1) {
                    if (resultFindUser[0].authDate != authDate) {
                        auth.updateAuthDate(id, authDate).then(resultUpdateIat => {
                            if (resultUpdateIat) {
                                return true;
                            }
                        });
                    }
                    else {
                        if (resultFindUser[0].authDate == authDate) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
            });
        } else {
            return false;
        }
    })
}

exports.userAuth = function(req, res, next) {
	if(req.body.login != null && req.body.password != null){
		auth.findUser(req.body.login, req.body.password).then(resultFindUser => {
			resultFindUser = resultFindUser.recordset;

			if(resultFindUser.length == 1) {

				auth.getPermission(resultFindUser[0].id).then(resultGetPermission => {
					resultGetPermission = resultGetPermission.recordset;

					var data = new Object;
					var jwtsecret = config.secret;
					var payload = {
						id: resultFindUser[0].id,
						login: resultFindUser[0].login,
						password: resultFindUser[0].password,
						permission: resultGetPermission[0].permission
					};
					data.token = jwt.sign(payload, jwtsecret);

					auth.updateAuthDate(resultFindUser[0].id, Math.floor(Date.now() / 1000)).then(resultUpdateAuthDate => {
						if(resultUpdateAuthDate){
							send(res, null, data);
						}
					});
				});
			}
			else{
				send(res, 'Неверный логин или пароль');
			}
		});
	}
	else{
		send(res, 'Не все поля заполнены');
	}
};
