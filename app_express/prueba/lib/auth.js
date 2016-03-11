"use strict";

var basicAuth = require('basic-auth');

var fn = function(user, pass){
	return function(req, res, next){
		var userRequest = basicAuth(req); //sacar del req el usuario
		if(!userRequest || userRequest.name !== user || userRequest.pass !== pass){
			//res.set(''); --> pone una respuesta en la cabecera
			res.set('www-Authenticate', 'Basic realm=Authorization Required'); 
			res.send(401);
			return;
		}

		//si esta bien
		next();
	};
}
module.exports = fn;
