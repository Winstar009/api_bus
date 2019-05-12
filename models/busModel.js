var db = require('../bin/config_db');

exports.getBusListByCompany = function(companyId) {
	return new Promise(function(resolve) {
		var sql = `SELECT [brand], [model], [type], [regNum], [yearIssue], [standingCapacity], 
							[seatingCapacity], [specialCapacity], [purchaseDate], [busId], [status]
					FROM [getBus_server] WHERE [companyId] = ${companyId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getBusList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT [brand], [model], [type], [regNum], [yearIssue], [standingCapacity], 
							[seatingCapacity], [specialCapacity], [purchaseDate], [busId], [status], [companyId], [companyName]
					FROM [getBus_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getBusById = function(busId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getBus_server] WHERE [busId] = ${busId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getServiceBusById = function(busId) {
	return new Promise(function(resolve) {
		var sql = `SELECT [date], [status], [description] FROM [getService_server] WHERE [busId] = ${busId} ORDER BY [date] DESC`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getBusModelList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT [brand], [model], [type], [standingCapacity], [seatingCapacity], [specialCapacity], [yearIssue] FROM [getBusModel_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getBusBrandList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getBusBrand_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getBusTypeList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getBusType_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

exports.getBusStatusList = function() {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getBusStatus_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}