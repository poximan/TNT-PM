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

        let tag = toTag(msg.topic)
        let valor = msg.payload;
        msg.payload = { tag, valor }

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
    (v= "PM_IPA_CENTRIFUGADO_MARCHA") => "buscarEnPlanilla",
    (v= "PM_IPA_FERMENTACION_PRESION") => "buscarEnPlanilla",
    (v= undefined) => "funcErr",
    (v= null) => "funcErr"
  )

  var gramatica = {
    buscarEnPlanilla: (msg) => {

      new Promise((resolve, reject) => {

        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile("dominio/formulas.xlsx")
        .then(function() {

          var worksheet = workbook.getWorksheet(1);

          worksheet.getColumn('A')
          .eachCell({ includeEmpty: false }, function(cell, rowNumber) {
            if(msg.payload.tag == cell.value){

              var row = worksheet.getRow(rowNumber)

              if(msg.payload.valor === "true" || msg.payload.valor === "false")
                msg.payload.valor = (msg.payload.valor === "true")? 1 : 0;

              row.getCell('B').value = parseFloat(msg.payload.valor)
              let ref = row.getCell('C').value
              let formula = row.getCell('D').value.formula
              let attr = row.getCell('F').value              

              console.log(ref + " " + formula + " " + attr);
              row.commit()
            }
          })
          resolve(workbook)
        })
      })
      .then((workbook) => {
        workbook.xlsx.writeFile("dominio/formulas.xlsx")
      })
    },
    funcErr: (msg) => {
      console.log("ejecutando funcErr");
      console.log("expresion desconocida para esta gramatica");
    }
  }

  /*
  ------- FUNC AUXILIARES
  */
  toTag = (topico) => {

    topico= trimBarras(topico)
    topico = topico.replace(/\//g, "_")
    return topico.toUpperCase()
  }

  trimBarras = (topico) => {
    if(topico.startsWith("/"))
      topico = topico.slice(1)
    if(topico.endsWith("/"))
      topico = topico.slice(0, -1)
    return topico;
  }

  RED.nodes.registerType("dsl-gen", DSLGen);
}
