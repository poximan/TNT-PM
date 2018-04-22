var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;

var db_global;

/*
......... servidor http
*/
app.post('/api/saveFlows', function (req, res) {

  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    persistir(body);
  });

});

app.get('/api/getFlows', function (req, res) {
  console.log("respondiendo get");
});

var listener = app.listen(3000, function(){
    console.log('Escuchando puerto ' + listener.address().port);
});

persistir = function(body) {

  try {
    console.log(body);
    //db_global.colecc_docker.save({ _id: 100, version: "1", flows: body });
  } catch (e) {
    console.error("INT: no es posible presistir estado en este momento");
  } finally { }
}

/*
......... persistencia
*/
MongoClient.connect('mongodb://mongo:27017/bd_docker', function(err, db) {

  if(err) throw err;

  var dbase = db.db("bd_docker");
  dbase.createCollection("colecc_docker");
  db_global = dbase;
});
