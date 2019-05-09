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
	user.getPermission(id).then(result => {
		console.log(result);
	});
}