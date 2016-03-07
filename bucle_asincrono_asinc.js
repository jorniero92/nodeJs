'use strict';

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
			callbackSiguiente();
		})
	},function fin(){
		console.log('fin');

	}
);