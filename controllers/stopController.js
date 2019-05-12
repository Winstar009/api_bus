var stop = require('../models/stopModel');
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

exports.getStopRoute = function(req, res, next) {
	stop.getStopRoute(req.params.routeId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getStopList = function(req, res, next) {
	stop.getStopList().then(result => {
		send(res, null, result.recordset);
	});
}