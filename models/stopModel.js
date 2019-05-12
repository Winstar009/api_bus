var db = require('../bin/config_db');

exports.getStopRoute = function(routeId) {
	return new Promise(function(resolve) {
		var sql = `SELECT [stopName], [stopDescription] FROM [getStopRoute_server] WHERE [routeId] = '${routeId}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getStopList = function(routeId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getStop_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}