"use strict";

console.log('empiezo la funcion 1');

var escribeTrasDosSegundos = function(texto, callback){
	setTimeout(function(){
		console.log(texto);
		callback();
	}, 2000);
};


escribeTrasDosSegundos('texto', function(){
	console.log('fin 1');
	console.log('empiezo la funcion 2');
		escribeTrasDosSegundos('texto', function(){
		console.log('fin 2');
		});
});

