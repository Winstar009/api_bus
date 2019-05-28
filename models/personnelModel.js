var db = require('../bin/config_db');

//Получение сотрудников компании
exports.getPersonnelListByCompany = function(companyId) {
	return new Promise(function(resolve) {
		var sql = `SELECT [personnelId], [fio], [phone], [email], [countFlight], [position] FROM [getPersonnel_server] WHERE [companyId] = ${companyId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

//Получение сотрудника по id
exports.getPersonnelById = function(personnelId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getPersonnel_server] WHERE [personnelId] = ${personnelId}`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

//Получение списка должностей сотрудника
exports.getPositionPersonnelById = function(personnelId) {
	return new Promise(function(resolve) {
		var sql = `SELECT [date], [position] FROM [getPersonnelPosition_server] WHERE [personnelId] = ${personnelId} ORDER BY [date] DESC`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

//Получение всех сотрудников
exports.getPersonnelList = function(companyId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getPersonnel_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

//Получение всех должностей
exports.getPositionList = function(companyId) {
	return new Promise(function(resolve) {
		var sql = `SELECT * FROM [getPosition_server]`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}

//Добавление должности
exports.addPosition = function (namePosition) {
    return new Promise(function (resolve) {
        var sql = `EXEC addPosition '${namePosition}'`;
        db.query(sql).then(function (result) {
            resolve(result);
        });
    }).then(result => result);
}

//Удаление должности
exports.delPosition = function (id) {
    return new Promise(function (resolve) {
        var sql = `EXEC delPosition '${id}'`;
        db.query(sql).then(function (result) {
            resolve(result);
        });
    }).then(result => result);
}

//Обновление должности
exports.updPosition = function (idPosition, namePosition) {
    return new Promise(function (resolve) {
        var sql = `EXEC updPosition '${idPosition}', '${namePosition}'`;
        db.query(sql).then(function (result) {
            resolve(result);
        });
    }).then(result => result);
}
