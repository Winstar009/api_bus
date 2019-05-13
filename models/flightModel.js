var db = require('../bin/config_db');

exports.getFlightList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getFlight_server] ORDER BY [date] DESC, [timeStart], [timeFinish]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getFlightById = function(personnelId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getFlight_server] WHERE [personnelId] = ${personnelId} ORDER BY [date] DESC, [timeStart], [timeFinish]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}