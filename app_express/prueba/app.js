var express = require('express');
var path = require('path'); //libreria para unir rutas
var favicon = require('serve-favicon'); // icono de la web 
var logger = require('morgan'); //hacer log
var cookieParser = require('cookie-parser'); 
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
//de router añadimos admin
var admin = require('./routes/admin');

var db = require('./lib/connectMongo.js')
var app = express();
var mongoose = require('./lib/connectMongoose.js');

app.use(function(req, res, next){
  // o llamar a next 
  // o responde
  //console.log(req.query);
  var algo = req.query.algo || '';
  req.algo = algo; // asi lo dejo preparado para que lo use otro
  //next();
  //res.send('soy el primero');
  next();
});

// view engine setup
//usa variables de express
app.set('views', path.join(__dirname, 'views')); // en views ira a buscar las rutas
// __dirname --> la ruta actual con /views
app.set('view engine', 'ejs'); // las plantillas con ejs


//app.use(); -->
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
 //al hacer un POST, coge el body y lo convierte en Json y lo pone en el body
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
// usamos la ruta
app.use('/admin', admin);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
