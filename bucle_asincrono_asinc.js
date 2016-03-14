"use strict";

var async = require('async');

console.log("Empezamos");

var escribeTras2Segundos = function(texto, callbackTras2Segundos) {
   setTimeout(function() {
       console.log(texto);
       callbackTras2Segundos();
   }, 500);
};


async.eachSeries([1,2,3,4,5], 
	function cadaElemento(item, callbackSiguiente){
		escribeTras2Segundos(item, function(){
			//si la division de item /2 es nulo o si es error
			//al llegar a 2 como la division es par va a error y termina
			var res = item % 2 ? null : 'error';
			callbackSiguiente(res);
		})
	},function fin(){
		console.log('fin');

	}
);