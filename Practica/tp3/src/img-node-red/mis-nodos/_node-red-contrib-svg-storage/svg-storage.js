module.exports = function(RED) {

  function SVGStorageNode(config) {

    RED.nodes.createNode(this, config);
    this.name = config.name;
    this.url = config.url;
    this.file = config.file;
    this.func = config.func;
    var functionText = 'var results = (function(msg){' + this.func + '\n})(msg);';
    this.topic = config.topic;
    var _this = this;

    this.on('input', function(msg) {

      var options = {
        uploadUrl: config.url,
        method: 'POST',
        fileId: 'file',
        fields: {
          'script': '{"file":"%s"}'
        },
        uploadHeaders:{
          'Cookie':((msg.cookie)? msg.cookie : "")
        }
      };

      poster.post(config.file, options, function(err, data) {
        if (!err) {
          msg.payload = data;
          _this.send(msg);
        } else {
          _this.error(err);
        }
      });
    });
  }
  console.log("node-red: Cargando svg-storage");
  RED.nodes.registerType("svg-storage", SVGStorageNode);
}
