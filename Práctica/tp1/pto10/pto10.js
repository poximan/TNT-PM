var express = require('express');
var app = express();

var MongoClient = require("mongodb").MongoClient;
var mongo_prot = "mongodb://";
var mongo_serv = "127.0.0.3:27017/";
var mongo_bd = "bd_docker";

/*
......... servidor http
*/
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

/*
......... persistencia
*/
var db_global;
var url = mongo_prot + mongo_serv;
MongoClient.connect(url, function(err, db) {

  if(err) throw err;

  var dbase = db.db(mongo_bd);
  dbase.createCollection("colecc_docker");
  db_global = dbase;
});
