var company = require('../models/companyModel');
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

exports.getCompanyList = function(req, res, next) {
	company.getCompanyList().then(result => {
		send(res, null, result.recordset);
	});
}

exports.getCompanyById = function(req, res, next) {
	company.getCompanyById(req.params.id).then(result => {
		send(res, null, result.recordset);
	});
}