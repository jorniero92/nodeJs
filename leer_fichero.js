"use strict";

//llamar/cargar una libreria de node llamada 'fs'
var fs = require('fs');

//leer fichero de tecto en utf8 y sacar en consola 
//su contenido
//la funcion es un callback
fs.readFile('./package.json', {encoding: 'utf8'}, function(err, data){
	//si NO hay error (err = undefined)
	if(err){
		console.log('ERROR!', err);
		// acordarse de que terminen las funciones
		return;
	}
	console.log(data);
	console.log('FIN');
});