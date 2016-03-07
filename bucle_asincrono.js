'use strict';

console.log("Empezamos");

var escribeTras2Segundos = function(texto, callback) {
   setTimeout(function() {
       console.log(texto);
       callback();
   }, 2000);
};

function serie(i){

	escribeTras2Segundos('texto' + i, function(){
		i--;
		
	    if (i == 0) {
	    	console.log('fin');
	    	return;
		}

		serie(i);
	});
	
} 
serie(5, escribeTras2Segundos);