var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;

var db_global;

/*
......... servidor http
*/
app.post('/api/saveFlows', function (req, res) {

  console.log("save!");
  console.log(req.res);

  if(db_global == undefined)
    res.send('servidor node/express sin mongo :(');
  else
    res.send('servidor node/express con mongo :)');
});

app.get('/api/getFlows', function (req, res) {

  console.log("get!");
  console.log(req.body);

  if(db_global == undefined)
    res.send('servidor node/express sin mongo :(');
  else
    res.send('servidor node/express con mongo :)');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

persistir = function() {

  try {
    console.log("INT: persistiendo estado");
    var coleccion_obj = db_global.collection(coleccion);

    compras.forEach(function(compra){
      coleccion_obj.update({id:compra.id}, compra, {up:true});
    });

    console.log("INT: estado persistido");
  } catch (e) {
    console.error("INT: no es posible presistir estado en este momento");
  } finally { }
}

/*
......... persistencia
*/
MongoClient.connect('mongodb://mongo:27017/test', function(err, db) {

  if(err) throw err;

  var dbase = db.db("bd_docker");
  dbase.createCollection("colecc_docker");
  db_global = dbase;
});
