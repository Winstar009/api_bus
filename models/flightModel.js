var db = require('../bin/config_db');

exports.getFlightList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getCompany_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getFlightById = function(flightId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getCompany_server] WHERE [companyId] = ${flightId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}