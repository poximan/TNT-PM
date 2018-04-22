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

  res.send(body);
});

app.get('/api/getFlows', function (req, res) {
  console.log("respondiendo get");
  res.send([]);
});

var listener = app.listen(3000, function(){
    console.log('Escuchando puerto ' + listener.address().port);
});

persistir = function(body) {

  try {

    console.log(body);
    var coleccion_obj = db_global.collection("colecc_docker");
    coleccion_obj.save({ version: new Date(), flows: body });

  } catch (e) {
    console.error("ERROR: no es posible presistir estado");
    console.error(e);
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
