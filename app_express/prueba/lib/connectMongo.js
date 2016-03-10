"use strict";

var client = require('mongodb').MongoClient;
var dbConnection = {db:null};

client.connect('mongodb://localhost:27017/cursonode',
	function(err,conn){
		if (err) {
			console.log('No se ha podidio conectar');
			process.exit(1);
		}
		console.log('connected to', conn.databaseName, 'on', conn.options.url);
		dbConnection.db = conn;
});
module.exports = dbConnection;