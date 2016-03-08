"use Strict";

var objeto = {
	//vuela no recibe nada
	vuela: function(){
		//vuela escribe en la pantalla
		console.log('volando voy');
	}
};

//exportar el modulo, exporta OBJETO
 module.exports = objeto;

//exports con nombre obeto 
// exports.objeto = objeto;