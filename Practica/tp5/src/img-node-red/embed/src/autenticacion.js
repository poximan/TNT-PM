var http = require('http');
var express = require("express");

// Create an Express app
var app = express();

app.post('/auth', function (req, res, next) {

  console.log("entrado");
  res.status(200).send("Acceso autorizadp");
  //res.status(403).send("Acceso denegado");
});

// Create a server
var server = http.createServer(app);

server.listen(8089);
