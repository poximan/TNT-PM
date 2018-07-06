var MongoClient = require("mongodb").MongoClient;
var shell = require('./shell')
var terminal = require("./propiedades.json").shell;
let path_compose = require("./propiedades.json").path_compose;

function mirarBD() {
  MongoClient.connect('mongodb://localhost:27017/', function(err, db) {

    if(err) throw err;
    db = db.db("red-proy")

    db.collection("proyectos").findOne({"proy-generado": false}, { "id-proyecto": 1 }, function(err, result_find) {
      if (err) throw err;
      if (!result_find) return;

      let nuevo_proy = result_find["id-proyecto"];
      result_find["proy-generado"] = true;

      db.collection("proyectos").updateOne({"id-proyecto": nuevo_proy }, {$set:result_find}, function(err, result_update) {
        if (err) throw err;
        nuevoNodeRed(nuevo_proy);
      });
    });
  })
}

setInterval(mirarBD, 5000);
/*
docker-compose run -d --name hugosss node-red
start cmd /K "d: && cd d:\documentos\hugo\git\TNT-PM\Practica\tp5\src && docker-compose run -d node-red"
*/
nuevoNodeRed = (nuevo_proy) => {
  shell.execCommand("start " + terminal + " /C \"d: && cd \"" +  path_compose + "\" && docker-compose run -d --name node-red-\"" + nuevo_proy + "\" node-red\"", function (returnvalue) {});
}
