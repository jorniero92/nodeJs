'use strict';

console.log("Empezamos");

var escribeTras2Segundos = function(texto, callback) {
   setTimeout(function() {
       console.log(texto);
       callback();
   }, 500);
};

function serie(arr, fn){
	
	if(arr.length == 0){
		console.log('fin');
	    return;
	}

	fn(arr.shift(), function(){
		serie(arr, fn);
	});
	
} 
//solo le doy la funcion de escribeTras2Segundos
serie([1,2,3,4,5], escribeTras2Segundos);