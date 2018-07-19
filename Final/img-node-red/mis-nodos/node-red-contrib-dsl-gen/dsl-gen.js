var Excel = require("exceljs")
const { celdasPorNumeros, evaluarExpresion } = require('./gramatica');
const { actualizarTag, existeTag, accesoPlanilla } = require('./tags');

module.exports = function(RED) {

  function DSLGen(config) {

    RED.nodes.createNode(this, config);
    var node = this;

    /*
    ------- MENSAJE ENTRANTE
    */
    this.on('input', function(msg) {

      if (msg.topic != undefined ){

        actualizarTag()

        let tag = toTag(msg.topic)
        let valor = msg.payload;
        msg.payload = { tag, attr: "", valor }

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
