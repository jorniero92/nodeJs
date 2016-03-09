"use strict";

var events = require('events'); //requerimos la clase
var eventEmitter = new events.EventEmitter(); // lo ejecutamos
// var eventEmitter = new (require('events')).EventEmitter();

eventEmitter.on('Llamada de telefono', function(){
	console.log('ring ring');
});

eventEmitter.on('Llamada de telefono', function(){
	console.log('brr brr');
});

//emitimos llamada de telefono
eventEmitter.emit('Llamada de telefono');