var MongoClient = require("mongodb").MongoClient;
var shell = require('./shell')
var terminal = require("./propiedades.json").shell;
let path_compose = require("./propiedades.json").path_compose;

function mirarBD() {
  MongoClient.connect('mongodb://localhost:27017/', function(err, db) {

    if(err) throw err;
    db = db.db("red-proy")

    nuevoNodeRed();

    db.collection("proyectos").find({"proy-generado": false}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  })
}

setInterval(mirarBD, 5000);

// start cmd /K "d: && cd d:\documentos\hugo\git\TNT-PM\Practica\tp5\src && docker-compose run -d node-red"
nuevoNodeRed = () => {
  shell.execCommand("start " + terminal + " /C \"d: && cd \"" +  path_compose + "\" && docker-compose run -d node-red\"", function (returnvalue) {});
}
