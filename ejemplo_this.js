"use strict";
 
var persona = {
	name: 'Luis',
	surname: 'Gomez',
	fullname: function() {
		console.log(this.name + ' ' + this.surname);
	}
};

var mascota = {
	name: "nodemon",
	surname: "front",
};

persona.fullname();
setTimeout(persona.fullname, 1000); // Undefined
setTimeout(persona.fullname.bind(persona), 1000); // Luis Gomez
// .bind(perona) el this será persona

function saluda(func){
	func();
}
saluda(persona.fullname.bind(persona));
persona.fullname.call(mascota);