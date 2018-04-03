var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var node_red = require("node-red");

console.log(node_red);

var db_global;

/*
......... servidor http
*/
app.get('/', function (req, res) {

  if(db_global == undefined)
    res.send('pto10 - servidor node/express sin mongo :(');
  else
    res.send('pto10 - servidor node/express con mongo :)');
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});

/*
......... persistencia
*/
MongoClient.connect('mongodb://mongo:27017/test', function(err, db) {

  if(err) throw err;

  var dbase = db.db("bd_docker");
  dbase.createCollection("colecc_docker");
  db_global = dbase;
});
