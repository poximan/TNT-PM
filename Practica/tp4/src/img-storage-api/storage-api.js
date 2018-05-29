var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;

var db_global;

/*
......... GET
*/
app.get('/api/getFlows', function (req, res) {

  var coleccion_obj = db_global.collection("colecc_docker");
  var doc = coleccion_obj.findOne( { ultimo: true } );

  doc.then(function(result) {
   let ret = (result == null? [] : result.flows)
   res.send(ret);
  })
});

/*
......... POST
*/
app.post('/api/saveFlows', function (req, res) {

  let body = [];

  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {

    body = Buffer.concat(body).toString();

    let flows = JSON.parse(body);
    var coleccion_obj = db_global.collection("colecc_docker");

    const persistir = async () => {
      const estado_previo = await actualizarAnterior(coleccion_obj)
      return guardarNuevo(coleccion_obj, estado_previo, flows)
    }
    persistir();
  });

  res.send(body);
});

/*
......... aux post
*/
function actualizarAnterior(coleccion_obj){

  var doc = coleccion_obj.findOne( { ultimo: true } );
  coleccion_obj.updateOne(
    { ultimo: true },
    { $set: { ultimo: false } }
  );

  return coleccion_obj.findOne( { _id: doc._id } );
}

function guardarNuevo(coleccion_obj, estado_previo, flows){

  coleccion_obj.save(
    { ultimo: true, autor: "desconocido", fecha: new Date(), flows: flows }
  );
}

var listener = app.listen(3000, function(){
    console.log('Escuchando puerto ' + listener.address().port);
});

/*
......... persistencia
*/
MongoClient.connect('mongodb://mongo:27017/bd_docker', function(err, db) {

  if(err) throw err;

  var dbase = db.db("bd_docker");
  dbase.createCollection("colecc_docker");
  db_global = dbase;
});
