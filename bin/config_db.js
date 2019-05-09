/**
 * Create pool to data base
 */

var config = {
	user: 'sa',
	password: 'Stark009s',
	server: '127.0.0.1\\SQLEXPRESS',
	port: 1433,
	database: 'Bus',
}

var mssql = require('mssql');

function queryCreate(sql) {
	return new Promise(function(resolve) {
		var connection = new mssql.ConnectionPool(config).connect().then(pool => {
			return pool.query(sql);
		}).then(result => {
			resolve(result);
		}).catch(err => {
			console.log(err);
		});
	});
}

module.exports.query = function (sql) {
	return queryCreate(sql).then(results => results);
}