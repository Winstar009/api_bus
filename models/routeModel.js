var db = require('../bin/config_db');

exports.getRouteList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getRoute_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getRouteById = function(id) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getRoute_server] WHERE [routeId] = '${id}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}