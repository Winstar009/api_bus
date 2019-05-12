var bus = require('../models/busModel');
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

exports.getBusList = function(req, res, next) {
	bus.getBusList().then(result => {
		send(res, null, result.recordset);
	});
}

exports.getBusListByCompany = function(req, res, next) {
	bus.getBusListByCompany(req.params.companyId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getBusById = function(req, res, next) {
	bus.getBusById(req.params.busId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getServiceBusById = function(req, res, next) {
	bus.getServiceBusById(req.params.busId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getBusModelList = function(req, res, next) {
	bus.getBusModelList(req.params.busId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getBusBrandList = function(req, res, next) {
	bus.getBusBrandList(req.params.busId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getBusTypeList = function(req, res, next) {
	bus.getBusTypeList(req.params.busId).then(result => {
		send(res, null, result.recordset);
	});
}

exports.getBusStatusList = function(req, res, next) {
	bus.getBusStatusList(req.params.busId).then(result => {
		send(res, null, result.recordset);
	});
}