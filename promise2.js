"use strict";

function conArroz(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + ' Arroz');
	})
}

function conSal(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + ' Sal');
	})
}

function conAjo(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + ' Ajo');
	})
}

function con(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + '' + ing);
	})
}

var paella = '1Paella con';

conArroz(paella) //cuando se devuelva conArroz saca un string
//conArroz('') //cuando se devuelva conArroz saca un string
	.then(conAjo)// es una funcion que resuelve
	.then(conSal)
	// hacemos algo distinto dentro
	.then(function(plato){
		console.log(plato);
		return con(plato, ' pimiento');
	}) 
	
	.then(function(plato){ //este devuelve una promesa
		console.log('El plato tiene: ', plato);
	})
	.then(function(algo){ //pueden devolver cosas que no son promesas
		console.log('algo ', algo);
	})
	.catch(function(err){
		console.log('Error', err);
	});
