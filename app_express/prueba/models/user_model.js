"use strict";

//var conn = require('../lib/connectMongo')
var conn = require('../lib/connectMongoose.js');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	age: Number
});

userSchema.statics.list = function(cb){
	var query = User.find({});
	//ejecutarlo
	query.short('name');

	query.exec(function(err, rows){
		if(err){
			cb(err);
			return;
		}
		cb(null, rows);
		return;
	});
};


//lo registro en mongoose
var User = mongoose.model('User', userSchema);

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
	userModelo.find({}, function(err,rows){
		if(err){
			cb(err);
			return;
		} 
		cb(null, rows);
		return;
	});

	////////////////////////////////////////

	}//);}
};

//exporto el modelo
module.exports = User1; //exportas el modelo, No el objeto