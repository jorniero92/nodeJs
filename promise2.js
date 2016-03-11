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
		reject('No lleva Ajo la paella');
	})
}

function con(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + '' + ing);
	})
}

var paella = 'paella con';

conArroz(paella) //cuando se devuelva conArroz saca un string
//conArroz('') //cuando se devuelva conArroz saca un string
	.then(conAjo)
	.then(conSal) // esuna funcion que resuelve
	.then(function(plato){
		console.log('El plato tiene: ', plato);
	})
	.catch(function(err){
		console.log('Error', err);
	});
