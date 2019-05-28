var personnel = require('../models/personnelModel');
var auth = require('../bin/config_auth');

function send(res, error, data) {
	var resData = new Object;
	if(error) {
		resData.error = error;
	}
	if(data){
		resData.data = data;
	}
	res.status(200);
	var str = JSON.stringify(resData);
	res.type('json').json(str);
}

//Получение сотрудников компании
exports.getPersonnelListByCompany = function(req, res, next) {
	personnel.getPersonnelListByCompany(req.params.companyId).then(result => {
		send(res, null, result.recordset);
	});
}

//Получение сотрудника по id
exports.getPersonnelById = function(req, res, next) {
	personnel.getPersonnelById(req.params.personnelId).then(result => {
		send(res, null, result.recordset);
	});
}

//Получение списка должностей сотрудника по id
exports.getPositionPersonnelById = function(req, res, next) {
	personnel.getPositionPersonnelById(req.params.personnelId).then(result => {
		send(res, null, result.recordset);
	});
}

//Получение всех сотрудников
exports.getPersonnelList = function(req, res, next) {
	personnel.getPersonnelList().then(result => {
		send(res, null, result.recordset);
	});
}

//Получение всех должностей
exports.getPositionList = function(req, res, next) {
	personnel.getPositionList().then(result => {
		send(res, null, result.recordset);
	});
}

//Добавление должности
exports.addPosition = function (req, res, next) {
    personnel.addPosition(req.body.namePosition).then(result => {
        send(res, null, result);
    });
}

//Удаление должности
exports.delPosition = function (req, res, next) {
    personnel.delPosition(req.params.id).then(result => {
        send(res, null, result);
    });
}

//Обновление должности
exports.updPosition = function (req, res, next) {
    if (req.body.namePosition != '' && req.body.idPosition != '') {
        personnel.updPosition(req.body.idPosition, req.body.namePosition).then(result => {
            send(res, null, result);
        });
    } else {
        send(res, 'Неверные данные');
    }
}