"use strict";

var users = [
	{name: 'Smith', age: '30'},
	{name: 'Jhon', age: '20'},
];

//metodos del modelo


var user = { //creo un objeto de forma literal
	getUsers: function(cb){ //cb --> callback
		//imaginamos que lee un fichero
		var usuariosLeidos = users;
		
		//devuelvo users
		cb(null, users);
	}
};

//exporto el modelo
module.exports = users;