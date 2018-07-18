const { MongoClient } = require("mongodb");
var http = require('http');
var express = require("express");

const USR_AUTORIZADO = 200;
const USR_RECHAZADO = 403;

var app = express();                  // Create an Express app
var server = http.createServer(app);  // Create a server

/*
......... CONTROLADORES GENERALES
*/
app.all('/*', function (req, res, next) {
  next(); // proximo controlador
});

app.param('username', function(req, res, next, username) {
  console.log("hay un username");
  req.username = username;
  next(); // proximo controlador
});

/*
......... CONTROLADORES PARTICULARES
*/

app.post('/superuser', function (req, res, next) {

  console.log("superuser");

  res.status(USR_AUTORIZADO).send("Acceso autorizado");
  //res.status(USR_RECHAZADO).send("Acceso denegado");
  next();
});

app.post('/acl', function (req, res, next) {

  console.log("acl");

  res.status(USR_AUTORIZADO).send("Acceso autorizado");
  //res.status(USR_RECHAZADO).send("Acceso denegado");
  next();
});

app.post('/auth', function (req, res, next) {

  console.log("user");

  res.status(USR_AUTORIZADO).send("Acceso autorizado");
  //res.status(USR_RECHAZADO).send("Acceso denegado");
  next();
});

/*
......... negociado con broker mqtt de usuarios autenticados
*/
server.listen(8089);

/*
......... PERSISTENCIA
*/
const uri = 'mongodb://mongo:27017';

(async function() {
  try {

    const client = await MongoClient.connect(uri,{ useNewUrlParser: true })
    client.db("mqGate").collection("users").find()

    client.close();
  } catch(e) {
    console.error(e)
  }

})()
