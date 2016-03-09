var express = require('express');
var router = express.Router();
var users = require('../models/user_model');

console.log('users', users);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/form', function(req, res, next) {
	//el array lo meto en users y la vista no lo ve como array
	//res.render('user_form', users);

	//{users: users} --> es un array con nombre users.
	res.render('user_form', {users: users});
});


module.exports = router;
