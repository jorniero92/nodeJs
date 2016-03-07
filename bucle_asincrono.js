'use strict';

console.log("Empezamos");

var escribeTras2Segundos = function(texto, callback) {
   setTimeout(function() {
       console.log(texto);
       callback();
   }, 500);
};

function serie(i, fn){
	fn('texto' + i, function(){
		i--;
		
	    if (i == 0) {
	    	console.log('fin');
	    	return;
		}

		serie(i, fn);
	});
	
} 
//solo le doy la funcion de escribeTras2Segundos
serie(5, escribeTras2Segundos);