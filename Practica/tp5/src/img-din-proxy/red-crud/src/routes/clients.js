var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var valores_iniciales = require("../db/init.json");


router.all('/', function (req, res, next) {
  next(); // proximo controlador
});

// leer documentos existentes
router.get('/', function(req, res, next) {

  conectarBD.then((coleccion) => {
    coleccion.find(JSON.stringify(req.query)).toArray(function(err, items) {
      res.json(items);
    });
  });
});

// nuevo documento
router.post('/', function(req, res, next) {

  let itemMarsh = prepareItem(req.body);
  conectarBD.then((coleccion) => {
    coleccion.insertOne(itemMarsh, function(err, item) {
      res.json(item);
    });
  });
});

// modificar documento
router.put('/', function(req, res, next) {

  var ObjectID = require('mongodb').ObjectID;
  var item = req.body;

  let id = item._id;
  delete item["_id"]

  conectarBD.then((coleccion) => {

    coleccion.update({"_id": ObjectID(id)}, {$set:item}, function(err, result){
      if (err) res.json(err);
      else     res.json(item);
    });
  });
});

// borrar documento
router.delete('/', function(req, res, next) {

  var item = req.body;
  var ObjectID = require('mongodb').ObjectID;

  conectarBD.then((coleccion) => {

    coleccion.remove({ "_id": ObjectID(item._id) }, function(err) {
      res.json(item);
    });
  });
});

var prepareItem = function(source) {

  var result = source;
  result["proy-generado"] = source["proy-generado"] === 'true' ? true : false;
  return result;
};

/*
------------- CONEXION A BASE DE DATOS
*/

let conectarBD = new Promise((resolve, reject) => {
  MongoClient.connect('mongodb://mongo:27017/', function(err, db) {
    if(err) reject(err);
    resolve(db.db("red-proy").collection("proyectos"))
  })
});

MongoClient.connect('mongodb://mongo:27017/', function(err, db) {

  if(err) throw err;

  db = db.db("red-proy")
  db.collection("proyectos").count({}).then(function(res) {
    if(res <= 0)
      db.collection("proyectos").insertMany(valores_iniciales).then(function(result) {
        console.log("---> HACIA MONGO ---> proyectos por defecto cargados");
      })
  })
})

module.exports = router;
