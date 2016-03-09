"use strict";

var express = require('express');
var router = express.Router();

// barra algo
router.get('/', function(req, res, next){
	console.log(req.query);
	res.send('Hola Express');
});

// barra y es un numero (opcional) --> (?)
router.get('/:id([0-9]+)/piso/:piso(A|B|C)', function(req, res, next){
	console.log(req.params, 'el id es', req.params.id,
		' y el piso es', req.params.piso);
	res.send('Hola Express');
});

// barra y es un numero
router.get('/:id([0-9]+)', function(req, res, next){
	console.log(req.params, 'el id es', req.params.id);
	res.send('Hola Express');
});

//barra y es algo
router.get('/:id', function(req, res, next){
	console.log(req.params);
	res.send('Hola Express');
});

router.post('/', function(req,res){
	//post a http://localhost:3000/admin/hola=55
	console.log(req.body);
	res.send('body recogiendo');
});



//en admin tendremos el router 
module.exports = router;