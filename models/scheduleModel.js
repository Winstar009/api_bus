var db = require('../bin/config_db');

exports.getScheduleRoute = function(routeId) {
	return new Promise(function(resolve) {
		var sql = `SELECT [timeStart], [timeFinish] FROM [getSchedule_server] WHERE [routeId] = ${routeId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}