"use strict";

var events = require('events'); //requerimos la clase
var eventEmitter = new events.EventEmitter(); // lo ejecutamos

// Hacer funcion constructora
var Persona = function(name){
	this.name = name;
};

//crear una instancia
var luis = new Persona('luis');
console.log(luis.name);

eventEmitter.on('Llamada de telefono', function(){
	console.log('ring ring');
});

//emitimos llamada de telefono
eventEmitter.emit('Llamada de telefono');

Persona.prototype = _extend(Persona.prototype, eventEmitter);
console.log(Persona.prototype);