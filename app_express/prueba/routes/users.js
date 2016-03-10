var express = require('express');
var router = express.Router();
var user = require('../models/user_model');
var mongoose = require('mongoose')

console.log('users', user);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/form', function(req, res, next) {

	var User = mongoose.model('User');
	User.list(function(err, rows){
		res.render('use_form', {users: rows});
	});
});


module.exports = router;
