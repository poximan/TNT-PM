var match = require('js-pattern-matching')
var Excel = require("exceljs")
const { evaluar } = require('./gramatica');

module.exports = function(RED) {

  function DSLGen(config) {

    RED.nodes.createNode(this, config);
    var node = this;

    /*
    ------- MENSAJE ENTRANTE
    */
    this.on('input', function(msg) {

      if (msg.topic != undefined ){

        let tag = toTag(msg.topic)
        let valor = msg.payload;
        msg.payload = { tag, attr: "", valor }

        const formula = lexemas(tag)
        planilla[formula](msg, (xls_filas) => {

          xls_filas.forEach(function(xls_fila) {

            evaluar(xls_fila, (valor, attr) => {
              msg.payload.valor = valor
              msg.payload.attr = attr
              node.send(msg)
            })
          })
        })
      }
    })

    this.on("close", (removed, done) => {
      if(removed)
        node.log("nodo removido");
      else
        node.log("nodo no removido");

      done();
    })
  }

  RED.nodes.registerType("dsl-gen", DSLGen);
}

/*
------- PATTERN-MATCH
*/
const lexemas = (value) =>  match (value) (
  (v= "PM_IPA_CENTRIFUGADO_MARCHA") => "existe",
  (v= "PM_IPA_FERMENTACION_PRESION") => "existe",
  (v= undefined) => "noexiste",
  (v= null) => "noexiste"
)

/*
------- ACCESO A PLANILLA
*/
const planilla = {
  existe: (msg, cb) => {

    var xls_filas = []
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

            xls_filas.push({
              tag: msg.payload.tag,
              B: row.getCell('B').value,
              C: row.getCell('C').value,
              formula: row.getCell('D').value.formula,
              attr: row.getCell('F').value
            })
            row.commit()
          }
        })
        resolve(workbook)
      })
    })
    .then((workbook) => {
      workbook.xlsx.writeFile("dominio/formulas.xlsx")
      cb(xls_filas)
    })
  },
  noexiste: (msg) => {
    console.log("no se reconoce tag obtenido desde uri mqtt");
  }
}

/*
------- FUNC AUXILIARES
*/
toTag = (topico) => {

  topico= trimChar(topico, "/")
  topico = topico.replace(/\//g, "_")
  return topico.toUpperCase()
}

trimChar = (topico, char) => {
  if(topico.startsWith(char))
    topico = topico.slice(1)
  if(topico.endsWith(char))
    topico = topico.slice(0, -1)
  return topico;
}
