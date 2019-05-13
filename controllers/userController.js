var user = require('../models/userModel');
var auth = require('../bin/config_auth');

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

exports.getUserInfo = function(req, res, next) {
	var id = auth.decodingToken(req).id;

	Promise.all([user.getPermission(id), user.getUser(id)]).then(result => {
		console.log(result[0].recordset[0]);
		console.log(result[1].recordset[0]);
		let r = {
			'fio' : result[1].recordset[0].fio,
			'countFlight' : result[1].recordset[0].countFlight,
			'personnelId' : result[1].recordset[0].personnelId,
			'permission' : result[0].recordset[0].permission
		}
		send(res, null, r);
	});
}