var schedule = require('../models/scheduleModel');
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

exports.getScheduleRoute = function(req, res, next) {
	schedule.getScheduleRoute(req.params.routeName).then(result => {
		send(res, null, result.recordset);
	});
}