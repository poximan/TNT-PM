var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var valores_iniciales = require("../db/clients.json");
var colecc_auth;

var prepareItem = function(source) {
  var result = source;
  result.superuser = source.superuser === 'true' ? true : false;
  result.access = parseInt(source.access, 10);
  return result;
};

// leer documentos existentes
router.get('/', function(req, res, next) {

  colecc_auth.find(JSON.stringify(req.query)).toArray(function(err, items) {
    res.json(items);
  });
});

// nuevo documento
router.post('/', function(req, res, next) {

  colecc_auth.insertOne(req.body, function(err, item) {
    res.json(item);
  });
});

// modificar documento
router.put('/', function(req, res, next) {

  var item = prepareItem(req.body);
  var ObjectID = require('mongodb').ObjectID;

  colecc_auth.update({ "_id": ObjectID(item._id) },
  item,
  /*
  {
    "username" : item.username,
    "password" : item.password,
    "superuser" : item.superuser,
    "topic" : item.topic,
    "access" : item.access
  },
  */
  function(err) {
    res.json(item);
  });
});

// borrar documento
router.delete('/', function(req, res, next) {

  var item = prepareItem(req.body);
  var ObjectID = require('mongodb').ObjectID;

  colecc_auth.remove({ "_id": ObjectID(item._id) }, {}, function(err) {
    res.json(item);
  });
});

MongoClient.connect('mongodb://mongo:27017/', function(err, db) {

  if(err) throw err;

  db = db.db("mqGate")

  db.collection("users").count({}).then(function(res) {

    if(res <= 0)
      db.collection("users").insertMany(valores_iniciales).then(function(result) {
        console.log("---> HACIA MONGO ---> usuarios por defecto cargados");
        colecc_auth = db.collection("users")
      })
  })
})

module.exports = router;
