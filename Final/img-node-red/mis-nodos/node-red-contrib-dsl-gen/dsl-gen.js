var match = require('js-pattern-matching');

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

        msg.topic = trimBarras(msg.topic)
        let tag = toTag(msg.topic)

        // salvar el valor y reescribir el payload
        let valor = msg.payload
        msg.payload = {}
        msg.payload[tag] = valor

        const formula = getFormula(tag)
        console.log(formula);
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
  const getFormula = (value) =>  match (value) (
    (v= "PM_IPA_CENTRIFUGADO_MARCHA") => "func1",
    (v= "PM_IPA_FERMENTACION_PRESION") => "func2",
    (v= undefined) => "An undefined value",
    (v= null) => "A null value"
  )

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
