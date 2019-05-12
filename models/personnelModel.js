var db = require('../bin/config_db');

exports.getPersonnelListByCompany = function(companyId) {
	return new Promise(function(resolve) {
		var sql = `SELECT [personnelId], [fio], [phone], [email], [countFlight], [position] FROM [getPersonnel_server] WHERE [companyId] = ${companyId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getPersonnelById = function(personnelId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getPersonnel_server] WHERE [personnelId] = ${personnelId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getPositionPersonnelById = function(personnelId) {
	return new Promise(function(resolve) {
		var sql = `SELECT [date], [position] FROM [getPersonnelPosition_server] WHERE [personnelId] = ${personnelId} ORDER BY [date] DESC`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getPersonnelList = function(companyId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getPersonnel_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getPositionList = function(companyId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getPosition_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}