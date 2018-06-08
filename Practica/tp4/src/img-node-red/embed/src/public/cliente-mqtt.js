/*
----------- DEF CLIENTE ----------------
*/
const clientId = "clientId-" + parseInt(Math.random() * 100, 10).toString();
console.log('Registrado como cliente: ' + clientId);
var client = new Paho.MQTT.Client(window.location.host, 80, "/mqtt", clientId);

/*
----------- RUTAS ----------------
*/
const suscrip_nuevo = "/canvas/nuevo";
const suscrip_editar = "/canvas/editar";
const suscrip_editar_todas = suscrip_editar+"/#";

/*
----------- MENSAJES ----------------
*/
client.onConnectionLost = function (responseObject) {
  console.log("[MQTT] - se perdió conexion: " + responseObject.errorMessage);
}

client.onMessageArrived = function (message) {

  if(message.destinationName == suscrip_nuevo)
    agregarGrafico(message.payloadString)

  if(message.destinationName.startsWith(suscrip_editar))
    editarAtributo(message.payloadString)
};

var options = {
  onSuccess: () => {
    console.log('[MQTT] - conectado');

    client.subscribe(suscrip_nuevo, {
      onSuccess: () => {
        console.log('[MQTT] - suscripto a ' + suscrip_nuevo);
      },
      onFailure: () => {
        console.log('[MQTT] - no se pudo realizar suscripcion a ' + suscrip_nuevo);
      }
    })

    client.subscribe(suscrip_editar_todas, {
      onSuccess: () => {
        console.log('[MQTT] - suscripto a ' + suscrip_editar_todas);
      },
      onFailure: () => {
        console.log('[MQTT] - no se pudo realizar suscripcion a ' + suscrip_editar_todas);
      }
    })

  },
  onFailure: () => {
    console.log('[MQTT] - no se pudo conectar');
  }
};

/*
----------- FUNCIONES ----------------
*/
function agregarGrafico(grafico) {

  var sampleSVG = d3.select("#canvas")
    .append("svg");
  sampleSVG.append(grafico);

  //$("#form-archiv").append(grafico);
}

function editarAtributo(atributo) {
  console.log("aca se edita grafico");
  console.log(atributo);

  console.log(document.getElementById("form-archiv").innerHTML);
}

/*
----------- CONECTAR ----------------
*/
client.connect(options);
