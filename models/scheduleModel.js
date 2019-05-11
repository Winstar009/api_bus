var db = require('../bin/config_db');

exports.getScheduleRoute = function(routeName) {
	return new Promise(function(resolve) {
		var sql = `SELECT [timeStart], [timeFinish] FROM [getSchedule_] WHERE [route] = '${routeName}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}