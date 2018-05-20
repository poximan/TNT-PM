module.exports = function(RED) {

  function SVGStorageNode(config) {

    console.log("aca no llega");
    RED.nodes.createNode(this, config);

    this.files = config.files;
    var node = this;

    // punto 4 - agregar la capacidad de responder mensajes
    this.on('input', function(msg) {

      if(msg.topic == "svg-list"){
        msg.payload = files;
      }
      node.send(msg);
    });

    this.on("close", (removed, done) => {
      if(removed)
        node.log("nodo removido");
      else
        node.log("nodo no removido");

      var global_context = this.context().global;
      global_context.set("files", ["archiv1", "archiv2"])

      node.log("nodo terminado");
      done();
    })

    this.status({fill:"red", shape:"ring", text:"deconectado"})

  }

  console.log(".-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.");
  console.log("node-red: Cargando svg-storage");
  console.log(".-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.");

  console.log("antes de registrar el tipo");
  RED.nodes.registerType("svg-storage", SVGStorageNode);
  console.log("despues de registrar el tipo");

/*
  var id = setInterval(function(){
    console.log("prueba");
    //console.log(node.files);
    console.log(RED.nodes.getNodeList);
    //clearInterval(id);
  }, 100000);
  */
}
