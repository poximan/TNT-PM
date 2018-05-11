module.exports = function(RED) {

  function SVGStorageNode(config) {

    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', function(msg) {
        // aca falta agregar comportamiento
        msg.payload = msg.payload;
        node.send(msg);
    });
  }
  RED.nodes.registerType("svg-storage", SVGStorageNode);
}
