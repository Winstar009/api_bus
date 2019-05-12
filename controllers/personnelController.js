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

exports.getPersonnelListByCompany = function(req, res, next) {
	personnel.getPersonnelListByCompany(req.params.companyId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getPersonnelById = function(req, res, next) {
	personnel.getPersonnelById(req.params.personnelId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getPositionPersonnelById = function(req, res, next) {
	personnel.getPositionPersonnelById(req.params.personnelId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getPersonnelList = function(req, res, next) {
	personnel.getPersonnelList().then(result => {
		send(res, null, result.recordset);
	});
}

exports.getPositionList = function(req, res, next) {
	personnel.getPositionList().then(result => {
		send(res, null, result.recordset);
	});
}