var express = require('express');
var router = express.Router();
var user = require('../models/user_model');

console.log('users', user);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/form', function(req, res, next) {
	//el array lo meto en users y la vista no lo ve como array
	//res.render('user_form', users);
/*  Para sincrono
	//hago el render de getUsers()
	//{users: users} --> es un array con nombre users.
	res.render('user_form', {users: user.getUsers()});
*/
	//Para asincrono
	user.getUsers(function(err, users){
		// en getUsers le metemos el callabck --> users
		//cuando esten disponibles lo mando a la vista
		res.render('user_form', {users: users});
	}); // ni llamo a next ni respondo, solo esperara a recuperar los users
});


module.exports = router;
