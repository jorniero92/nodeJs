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

// Herencia ----
// Otra funcin que hereda de persona
var Agente = function(name){
    //Ejecutamos constructor heredado
    //Lo mismo que llamar a super() en otros lenguajes
    Persona.call(this, name); //Bindeamos nombre
}

Agente.prototype = new Persona();

var juan = new Agente("Juan");

juan.saluda();


console.log(Object.getPrototypeOf(juan));
console.log(juan instanceof Agente);
console.log(juan instanceof Persona);
console.log(juan instanceof Object);

//ejemplo de herencia de eventEmiter
var EventEmiter = require('events').EventEmitter;
var extend = require('util')._extend;


Persona.prototype = extend(Persona.prototype, EventEmiter.prototype);

var jose = new Persona('jose');

jose.on('asdas', function(data){
	console.log('ha saltado evento!', data);
});

jose.emit('asdas', { playload: 55000});

process.on('exit', function(){
	jose.emit('asdas', 'el programa termina!');
});