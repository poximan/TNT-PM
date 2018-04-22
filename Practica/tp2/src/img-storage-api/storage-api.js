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
      await actualizarAnterior(coleccion_obj)
      return guardarNuevo(coleccion_obj, flows)
    }
    persistir();
  });

  res.send(body);
});

/*
......... aux post
*/
function actualizarAnterior(coleccion_obj){
  try {
    coleccion_obj.updateOne(
      { ultimo: true },
      { $set: { ultimo: false } }
    );
  } catch (e) {
    console.error(e);
  } finally { }
}

function guardarNuevo(coleccion_obj, flows){
  try {
    coleccion_obj.save(
      { ultimo: true, fecha: new Date(), flows: flows }
    );
  } catch (e) {
    console.error(e);
  } finally { }
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
