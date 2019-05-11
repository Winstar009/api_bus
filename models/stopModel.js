var db = require('../bin/config_db');

exports.getStopRoute = function(routeName) {
	return new Promise(function(resolve) {
		var sql = `SELECT [stopName], [stopDescription] FROM [getStop_] WHERE [route] = '${routeName}'`;
		db.query(sql).then(function(result){
			resolve(result);
		});
	}).then(result => result);
}