var db = require('../bin/config_db');

exports.getRoutes = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getRoute_]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getRouteById = function(id) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getRoute_] WHERE [routeId] = '${id}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}