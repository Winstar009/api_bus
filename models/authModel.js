var db = require('../bin/config_db');

exports.findUser = function (login, password) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM personnel WHERE login = '${login}' AND password = '${password}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.findUserToken = function (id, login, password) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM personnel WHERE id = '${id}' AND login = '${login}' AND password = '${password}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.updateAuthDate = function(id, authDate) {
	return new Promise(function(resolve) {
		var sql = `UPDATE personnel SET authDate = '${authDate}' WHERE id = '${id}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}