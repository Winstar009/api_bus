var db = require('../bin/config_db');

exports.getCompanyList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getCompany_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getCompanyById = function(companyId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getCompany_server] WHERE [companyId] = ${companyId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}