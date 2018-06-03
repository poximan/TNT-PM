module.exports = function(RED) {

  function SVGStorageNode(config) {

    RED.nodes.createNode(this, config);

    this.cantidad = config.cantidad;
    this.archivos = new Array(this.cantidad);

    for(var i = 0; i < this.cantidad; i++){
      this.archivos[i] = {
        id: config["archivo_contenido_"+i],
        name: config["archivo_nombre_"+i]
      }
    }

    var node = this;

    this.on('input', function(msg) {

      console.log("ID MSG -> %s", msg._msgid);

      if (msg.req != undefined ){

        console.log("HTTP - req url -> %s", msg.req.url);
        console.log("HTTP - req params -> %s", JSON.stringify(msg.req.params));

        if(msg.req.params.topic == "svg-list"){

          console.log("pide la lista");

          var acumulado = "";

          if(this.archivos.length > 0)
            for (var i = 0; i < this.cantidad; i++)
              acumulado += Buffer.from(this.archivos[i].id);
          else {
            acumulado = "<p> no existen archivos para mostrar </p>";
          }

          msg.payload = acumulado;
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
      }

      if (msg.topic != undefined ){

        console.log("WEBSOCKETS -> %s", JSON.stringify(msg));

        var acumulado = "";

        if(this.archivos.length > 0)
          for (var i = 0; i < this.cantidad; i++)
            acumulado += Buffer.from(this.archivos[i].id);
        else {
          acumulado = "no existen archivos para mostrar";
        }

        msg.payload = acumulado;
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

  RED.nodes.registerType("svg-storage", SVGStorageNode);
}
