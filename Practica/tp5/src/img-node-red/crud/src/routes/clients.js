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

router.get('/', function(req, res, next) {

  colecc_auth.find(JSON.stringify(req.query)).toArray(function(err, items) {
    res.json(items);
  });
});

router.post('/', function(req, res, next) {
  colecc_auth.insert(JSON.stringify(req.query)).toArray(function(err, items) {
    res.json(item);
  });
});

router.put('/', function(req, res, next) {
  var item = req.body;

  colecc_auth.update({ _id: item._id }, item, {}, function(err) {
    res.json(item);
  });
});

router.delete('/', function(req, res, next) {
  var item = prepareItem(req.body);

  colecc_auth.remove({ _id: item._id }, {}, function(err) {
    res.json(item);
  });
});

MongoClient.connect('mongodb://mongo:27017/', function(err, db) {

  if(err) throw err;

  db = db.db("mqGate")

  db.collection("users").insertMany(valores_iniciales).then(function(result) {
    console.log("---> HACIA MONGO ---> usuarios por defecto cargados");
    colecc_auth = db.collection("users")
  })
})

module.exports = router;
