"use strict";
//conectar con driver de mongodb
//var conn = require('../lib/connectMongo');

/*
//datos
var users = [
	{name: 'Smith', age: '30'},
	{name: 'Jhon', age: '20'},
	{name: 'Pepe', age: '25'}
];
*/

//conectar con driver de mongose
var conn = require('../lib/connectMongoose');
var mongoose = require('mongoose');

//creo el esquema
var userSchema = mongoose.Schema({
	//propiedades del objeto
	name: String,
	age: Number

}); 

//lo registro en mongoose
mongoose.model('User', userSchema);

//metodos del modelo
var User1 = { //creo un objeto de forma literal
	getUsers: function(cb){ //cb --> callback
	/*	
		//imaginamos que lee un fichero
		// var usuariosLeidos = users;
		conn.db.collection('agentes').find({}).toArray(function(err, usuariosLeidos){
			if(err){
				cb(err);
				return;
			} 
				
			//devuelvo users
			cb(null, users);
			return;
	*/

//  con Mongoose ////////////////////////////
	var userModelo = mongoose.model('User');
	userModelo.find({}, function(err,datos){
		if(err){
			cb(err);
			return;
		} 
		cb(null, datos);
		return;
	});

	////////////////////////////////////////
	}//);}
};

//exporto el modelo
module.exports = User1; //exportas el modelo, No el objeto