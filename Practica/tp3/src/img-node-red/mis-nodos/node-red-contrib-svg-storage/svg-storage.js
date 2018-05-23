module.exports = function(RED) {

  function SVGStorageNode(config) {

    RED.nodes.createNode(this, config);

    this.nombre = config.nombre;
    this.contenido = config.contenido;

    var node = this;

    this.on('input', function(msg) {

      let req = msg.req;
      let res = msg.res;
      let payload = msg.payload;

      console.log("REQ URL ---------------------------------------------");
      console.log(req.url);

      console.log("REQ QUERY ---------------------------------------------");
      console.log(req.query);

      console.log("REQ PARAMS ---------------------------------------------");
      console.log(req.params);

      console.log("PAYLOAD ---------------------------------------------");
      console.log(payload);

      if(msg.req.params.topic == "svg-list"){
        console.log("pide la lista");
        msg.payload = this.contenido;
      }

      if(msg.req.params.topic.startsWith("svg-get-")){
        console.log("pide un archivo");
      }

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

  console.log(".-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.");
  console.log("node-red: Cargando svg-storage");
  console.log(".-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.");

  RED.nodes.registerType("svg-storage", SVGStorageNode);
}
