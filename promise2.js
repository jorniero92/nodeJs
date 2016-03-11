"use strict";
function arroz(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + 'Arroz');
	})
}