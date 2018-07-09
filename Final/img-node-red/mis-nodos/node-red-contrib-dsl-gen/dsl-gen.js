var match = require('js-pattern-matching')
var Excel = require("exceljs")
const { resolve } = require('path')

module.exports = function(RED) {

  function DSLGen(config) {

    RED.nodes.createNode(this, config);

    this.cantidad = config.cantidad;

    var node = this;

    /*
    ------- MENSAJE ENTRANTE
    */
    this.on('input', function(msg) {

      if (msg.topic != undefined ){

        let topico = trimBarras(msg.topic)
        let tag = toTag(topico)

        // salvar el valor y reescribir el payload
        let valor = msg.payload
        msg.payload = {}
        msg.payload[tag] = valor

        const formula = lexemas(tag)
        gramatica[formula](msg)
      }

      node.send(msg);
    });

    /*
    ------- MENSAJE SALIENTE
    */
    this.on('output', function(msg) {

      console.log("saliendo -> %s", JSON.stringify(msg));
      node.send(msg);
    });

    this.on("close", (removed, done) => {
      if(removed)
        node.log("nodo removido");
      else
        node.log("nodo no removido");

      done();
    })
  }

  /*
  ------- PATTERN-MATCH
  */
  const lexemas = (value) =>  match (value) (
    (v= "PM_IPA_CENTRIFUGADO_MARCHA") => "func1",
    (v= "PM_IPA_FERMENTACION_PRESION") => "func2",
    (v= undefined) => "funcErr",
    (v= null) => "funcErr"
  )

  var gramatica = {
    func1: (msg) => {
      console.log("ejecutando func1");
      console.log(resolve());
      // read from a file
      var workbook = new Excel.Workbook();
      workbook.xlsx.readFile("dominio/formulas.xlsx")
          .then(function() {

            var worksheet = workbook.getWorksheet("Hoja1");
            var idCol = worksheet.getColumn('A')

            console.log(idCol);
          });
    },
    func2: (msg) => {
      console.log("ejecutando func2");

      console.log("topico -> " + msg.topic);
      console.log("payload -> " + JSON.stringify(msg.payload));
    },
    funcErr: (msg) => {
      console.log("ejecutando funcErr");
      console.log("expresion desconocida para esta gramatica");
    }
  }

  /*
  ------- FUNC AUXILIARES
  */
  trimBarras = (topico) => {

    if(topico.startsWith("/"))
      topico = topico.slice(1)

    if(topico.endsWith("/"))
      topico = topico.slice(0, -1)

    return topico;
  }

  toTag = (topico) => {

    /*
    obtener los simbolos del lenguaje
    let simbolos = topico.split("/")
    */

    /*
    transformar el direccionamiento arbol a tag plano
    */
    let tag = topico.replace(/\//g, "_")
    return tag.toUpperCase()
  }

  RED.nodes.registerType("dsl-gen", DSLGen);
}
