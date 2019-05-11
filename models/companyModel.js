var db = require('../bin/config_db');

exports.getCompanyById = function(id) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getCompany_] WHERE [companyId] = ${id}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}