var Excel = require("exceljs")
const { actualizarTag, existeTag, accesoPlanilla } = require('./tags');
const { celdasPorNumeros, evaluarExpresion } = require('./gramatica');

module.exports = function(RED) {

  function DSLGen(config) {

    RED.nodes.createNode(this, config);
    var node = this;

    /*
    ------- MENSAJE ENTRANTE
    */
    this.on('input', function(msg) {

      if (msg.topic != undefined ){

        /*
        actualiza la base de tags conocidos
        son todos los tag de la planilla, sin repetir
        */
        actualizarTag((workbook) => {

          let tag = toTag(msg.topic)
          let valor = msg.payload;
          msg.payload = { tag, attr: "", valor }

          /*
          verifica que el tag construido desde el mensaje
          sea un tag conocido de la planilla
          */
          const funcion = existeTag(tag)
          accesoPlanilla[funcion](msg, (xls_filas) => {

            xls_filas.forEach(function(xls_fila) {

              celdasPorNumeros(xls_fila)

              evaluarExpresion(xls_fila, (valor, attr) => {
                msg.payload.valor = valor
                msg.payload.attr = attr
                node.send(msg)
              })
            })
          })
        })
      } else {
        console.log("sin topico");
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
