"use strict";
var creaAgente = function(_edad) {
	var edad = _edad;
	//devuelvo un objeto con funciones
	return {
		dimeEdad: function() {
			console.log('yo tengo ' + edad);
			return edad;
		}
	}
}
var agente = creaAgente(30);
var smith = creaAgente(22);
console.log(agente.dimeEdad(), smith.dimeEdad());
setTimeout(creaAgente.dimeEdad, 1000);
setTimeout(smith.dimeEdad, 1000);