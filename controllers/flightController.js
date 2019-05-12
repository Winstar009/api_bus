var flight = require('../models/flightModel');
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

exports.getFlightList = function(req, res, next) {
	flight.getFlightList().then(result => {
		send(res, null, result.recordset);
	});
}

exports.getFlightById = function(req, res, next) {
	flight.getFlightById(req.params.id).then(result => {
		send(res, null, result.recordset);
	});
}