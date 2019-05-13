var db = require('../bin/config_db');

exports.getPermission = function (idUser) {
	return new Promise(function(resolve) {
		var sql = `EXEC getPermission '${idUser}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getUser = function (idUser) {
	return new Promise(function(resolve) {
		var sql = `SELECT [personnelId], [fio], [countFlight] FROM [getPersonnel_server] WHERE [personnelId] = '${idUser}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}