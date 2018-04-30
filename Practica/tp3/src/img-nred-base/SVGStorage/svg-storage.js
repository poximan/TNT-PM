module.exports = function(RED) {

  function SVGStorageNode(config) {

    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', function(msg) {
        msg.payload = msg.payload.save();
        node.send(msg);
    });
  }
  RED.nodes.registerType("svg-storage", SVGStorageNode);
}
