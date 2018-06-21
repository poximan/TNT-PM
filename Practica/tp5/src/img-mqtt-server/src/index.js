/*
https://stackoverflow.com/questions/39678982/difference-between-port-and-listener-in-mqtt?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

listen 1883 expect MQTT packets
MQTT http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html
  1. establish TCP connection
  2. now we're talking MQTT
  3. send MQTT packets as defined by standard (publish/sub/unsub) or disconnect

listen 9001 expect HTTP/Websocket protocol
Websocket protocol, https://tools.ietf.org/html/rfc6455
  1. establish TCP connection
  2. send HTTP request with Upgrade: websocket header and other preparation
  3. except 101 Switching Protocols response
  4. now we're talking Websocket, either side can send messages as defined by standard
*/

// express ---------
const express = require('express')
const app = express()


// mqtt ---------
const mqtt = require('mqtt')
let client;
let msg_preparado = "<html> <body> <body/> <html/>";

var id = setInterval(function(){

  console.log(".-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.");
  console.log("mqtt-server: Conectando a broker mqtt");

  client = mqtt.connect("mqtt://mqtt");
  if(client != undefined){
    clearInterval(id);

    client.on('connect', () => {
      client.subscribe('/canvas/#')
    })

    client.on('message', (topic, message) => {

      if(topic == "/canvas/nuevo"){
        console.log("topico " + topic);

        if(typeof JSON.stringify(message) == "string")
        message = "<html> <body> " + message + " <body/> <html/>";

        msg_preparado = message;
      }
      else {
        console.log("topico desconocido");
      }
    })
  }
}, 500);

app.get('/mqtt-server', (req, res) => {
  res.send(msg_preparado);
})

/* ................................
ESCUCHADOR DE CONEXIONES ENTRANTES
................................ */
var listener = app.listen(8100, function(){
  console.log('Escuchando cliente web en puerto: ' + listener.address().port);
});
