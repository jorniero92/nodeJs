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


//Añadir un user
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

//actualizar un user
router.put('/:id', function(req, res){ 
	var options = {};
	// var options = {multi: true}; //para actalizar varios usar multi

	User.update({_id: req.params.id}, {$set: req.body}, {multi: true}, function(err, data){
		if(err){
			res.json({result: false, err: err});
			return;	
		}
		res.json({result: true, row: data});
	});


/*
	//primero es cargarlo
	User.find({_id: req.params.id}, function(err, row){
		if(err){
			res.json({result: false, err: err});
			return;	
		}
		if(!row){
			res.json({result: false, err: 'Not Found'});
			return;	
		}
		//actualizarlo
		Object.assign(row, req.body);
		
		//Guardarlo y ver si hay errores
		row.save(function(err, rowSaved){
			if(err){
				res.json({result: false, err: err});
				return;	
			}
			res.json({result: true, err: rowSaved});
		})
	});
*/

}); //fin del put

//Eliminar un user
router.delete('/:id', function(req, res){ 
	var options = {};
	// var options = {multi: true}; //para actalizar varios usar multi

	User.remove({_id: req.params.id}, function(err, data){
		if(err){
			res.json({result: false, err: err});
			return;	
		}
		res.json({result: true, row: data});
	});
}); //fin del delete


//exporto el modelo
module.exports = router; //exportas el modelo, No el objeto