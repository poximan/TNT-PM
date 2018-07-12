var match = require('js-pattern-matching')
var Excel = require("exceljs")
const { resolve } = require('path')

module.exports = function(RED) {

  const OPER_IF = /^IF\((\w\d)(=|>|<|>=|<=|<>)(\w\d),\"(.+)\",\"(.+)\"\)$/;

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
        msg.payload = { tag, attr: "", valor }

        const formula = lexemas(tag)
        gramatica[formula](msg, (valores) => {

          this.valores = valores

          valores.forEach(function(xls_fila) {
            if(OPER_IF.test(xls_fila.formula)){
              let partes = OPER_IF.exec(xls_fila.formula)

              msg.payload.valor = operadores[partes[2]](xls_fila.B, xls_fila.C, partes[4], partes[5])
              msg.payload.attr = xls_fila.attr
              node.send(msg);
            }
          });
        })
      }
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
    (v= "PM_IPA_CENTRIFUGADO_MARCHA") => "existe",
    (v= "PM_IPA_FERMENTACION_PRESION") => "existe",
    (v= undefined) => "error",
    (v= null) => "error"
  )

  const gramatica = {
    existe: (msg, cb) => {

      var valores = []
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

              valores.push({
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
        cb(valores)
      })
    },
    error: (msg) => {
      console.log("ejecutando funcErr");
      console.log("expresion desconocida para esta gramatica");
    }
  }

  const operadores = {
    '>': function(a, b, ret_v, ret_f) {
      return (a > b)? ret_v : ret_f
    },
    '<': function(a, b, ret_v, ret_f) {
      return (a < b)? ret_v : ret_f
    },
    '<=': function(a, b, ret_v, ret_f) {
      return (a <= b)? ret_v : ret_f
    },
    '>=': function(a, b, ret_v, ret_f) {
      return (a >= b)? ret_v : ret_f
    },
    '=': function(a, b, ret_v, ret_f) {
      return (a == b)? ret_v : ret_f
    },
    '<>': function(a, b, ret_v, ret_f) {
      return (a != b)? ret_v : ret_f
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

  RED.nodes.registerType("dsl-gen", DSLGen);
}
