"use strict";
//de json a objeto
//acceder a la versiond e cada modulo y sacar la verion de cada uno

var fs = require('fs');

versionModulo('chance', function(err,str){
	if(err){
		console.error('Hubo un error', err);
		return;
	}
	console.log('La version del módulo es: ', str);
});

function versionModulo(paquete, callback){
	fs.readFile('node_modules/' + paquete + '/package.json', {encoding: 'utf8'}, function(err, data){
		if(err){
			callback(err);
			// acordarse de que terminen las funciones
			return;
		}
		var paquete = JSON.parse(data); //convierte el string d utf8 en un string
		var ver = paquete.version;
		callback(err, ver);
		console.log('FIN');
	});
}