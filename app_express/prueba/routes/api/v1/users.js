"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res) {
	
	User.list(function(err, rows){

		if(err){
			res.json({ //le damos nuestro error q hacemos
				result: false,
				err: err
			});
			return;
		}

		//cuando esten disponibles los mando en JSON
		//devuelve el error y lo q me han pedido
		res.json({result: true, rows: rows}); 
	});
 
});

router.post('/', function(req,res){
	var user = User(req.body); //el req.body es lo de la peticion post
	//guardamos en la BD
	user.save(function(err, newRow){
		if(err){
			res.json({result: false, err: err});
			return;
		}
		// delete newRow.__v; //borra __v --> No va
		res.json({result: true, err: newRow});
		return;
	});
});

//exporto el modelo
module.exports = router; //exportas el modelo, No el objeto