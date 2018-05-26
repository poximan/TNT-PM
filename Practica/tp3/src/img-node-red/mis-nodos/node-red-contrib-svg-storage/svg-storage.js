module.exports = function(RED) {

  function SVGStorageNode(config) {

    RED.nodes.createNode(this, config);

    this.archivos = new Array(config.cantidad);

    for(var i = 0; i < config.cantidad; i++){
      this.archivos[i] = {
        id: config["archivo_contenido_"+i],
        name: config["archivo_nombre_"+i]
      }
    }

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
        msg.payload = this.archivos[0].id;
      }

      if(msg.req.params.topic.startsWith("svg-get-")){

        var indice = msg.req.params.topic.split("-").pop();
        console.log("pide archivo " + indice);

        if(this.archivos.length > indice)
          msg.payload = this.archivos[indice].id;
        else {
          msg.payload = "<p> no existe archivo, probar con numero mas bajo </p>";
        }
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
