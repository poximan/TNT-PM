module.exports = function(RED) {

  function DSLGen(config) {

    RED.nodes.createNode(this, config);

    this.cantidad = config.cantidad;

    var node = this;

    this.on('input', function(msg) {

      if (msg.topic != undefined ){

        console.log("WS - msg mqtt orig -> %s", JSON.stringify(msg));

        msg.topic = trimBarras(msg.topic)
        let tag = toTag(msg.topic)

        let valor = msg.payload
        msg.payload = {}
        msg.payload[tag] = valor

        console.log("WS - msg mqtt transf -> %s", JSON.stringify(msg));
      }

      node.send(msg);
    });

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
  }

  RED.nodes.registerType("dsl-gen", DSLGen);
}
