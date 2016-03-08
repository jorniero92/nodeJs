"use strict";

// Hacer funcion constructora
var Persona = function(name){
	this.name = name;
};

//crear una instancia
var luis = new Persona('luis');

console.log(luis.name);

// cambiar su protopipo
Persona.prototype.saluda = function(){
	console.log('Hola soy ' + this.name);
};

luis.saluda();

var pepe = new Persona('pepe');

pepe.saluda();