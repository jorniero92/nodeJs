"use strict";
/*
como voy a devolver una promesa no hace falta callback
var sleep = function(ms,callback){}
*/
var sleep = function(ms){
	//console.log(ms);
	//creamos la promesa
	var promesa = new Promise(function(resolve, reject){
	// antes del setTimeout creamos la promesa
		setTimeout(function(){
			if(ms % 2 !== 0){ // si es par los ms
				reject(new Error('Fatal'));
				return;
			}
			//cuando pasa el tiempo resolvemos la promesa
			resolve({name: 'Jones'});
			return;	
		}, ms);

	});
	return promesa;
};

//no hay problema xq la otra variable esta dentro de una funcion
var promesa = sleep(1000);

console.log(promesa);

promesa.then(sleep)
	.then(function(){
	console.log('promesa terminada!');
}).catch(function(err){
	console.error('Error fatal!', err);
});