module.exports = function(RED) {

  function SVGStorageNode(config) {

    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', function(msg) {
      // aca falta agregar comportamiento
      console.log(msg);
      msg.payload = msg.payload;
      node.send(msg);
    });
  }

  console.log(".-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.");
  console.log("node-red: Cargando svg-storage");
  console.log(".-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.");

  RED.nodes.registerType("svg-storage", SVGStorageNode);
}
