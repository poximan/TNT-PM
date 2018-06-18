/*
----------- DEF CLIENTE ----------------
*/
const clientId = "clientId-" + parseInt(Math.random() * 100, 10).toString();
console.log('Registrado como cliente: ' + clientId);
var client = new Paho.MQTT.Client(window.location.host, 80, "/mqtt", clientId);

/*
----------- BASE PARA CALCULAR COMPLEMENTO EN NIVELES ----------------
*/
let selection = d3.select("svg").select("#silo_malta_nivel");
let silo_malta_nivel_piso = parseFloat(selection.attr("y")) + parseFloat(selection.attr("height"));

selection = d3.select("svg").select("#mezclado_malta_nivel");
let mezclado_malta_nivel_piso = parseFloat(selection.attr("y")) + parseFloat(selection.attr("height"));


/*
----------- RUTAS ----------------
*/
const ub_geo_pm = "/pm"
const proc_fab_cerv = ub_geo_pm+"/prod-cerveza"

const sproc_silo_grano = proc_fab_cerv+"/silo-grano"
const sproc_mezclado_malta = proc_fab_cerv+"/mezclado-malta"
const sproc_precoccion = proc_fab_cerv+"/precoccion"

const tarea_silo_nivel = sproc_silo_grano+"/tambor/nivel"
const tarea_mezclado_nivel = sproc_mezclado_malta+"/tambor/nivel"
const tarea_precoccion_nivel = sproc_precoccion+"/tambor/nivel"

/*
----------- CONTENEDOR SVG ----------------
*/
var svg_contenedor = d3.select("#svg_contenedor");

/*
----------- MENSAJES ----------------
*/
client.onConnectionLost = function (responseObject) {
  console.log("se perdió conexion: %s", responseObject.errorMessage);
}

client.onMessageArrived = function (message) {

  if(message.topic.startsWith(sproc_silo_grano)){
    console.log("subproceso silo grano")
    editarSiloGrano(message)
  }

  if(message.topic.startsWith(sproc_mezclado_malta)){
    console.log("subproceso mezclado malta")
    editarMezcladoMalta(message)
  }
};

var options = {
  onSuccess: () => {

    console.log('conectado');
    const pm_prod_cerv_todo = proc_fab_cerv+"/#"

    client.subscribe(pm_prod_cerv_todo, {
      onSuccess: () => { console.log('suscripto a ' + pm_prod_cerv_todo); },
      onFailure: () => { console.log('no se pudo realizar suscripcion a ' + pm_prod_cerv_todo); }
    })
  },
  onFailure: () => { console.log('no se pudo conectar'); }
};

/*
----------- FUNCIONES ----------------
*/
function editarSiloGrano(message) {

  let selection = d3.select("svg").selectAll('[topico="' + message.topic + '"]');
  let params = JSON.parse(message.payloadString);

  selection.attr("height", params);
  selection.attr("y", silo_malta_nivel_piso - params);
}

function editarMezcladoMalta(message) {

  let selection = d3.select("svg").selectAll('[topico="' + message.topic + '"]');
  let params = JSON.parse(message.payloadString);

  selection.attr("height", params);
  selection.attr("y", mezclado_malta_nivel_piso - params);
}

/*
----------- AUXILIARES ----------------
*/
function escalar(params) {
  return rgb(parseInt(params) * (65535/10));
}

function rgb(num) {
  num >>>= 0;
  var b = num & 0xFF,
      g = (num & 0xFF00) >>> 8,
      r = (num & 0xFF0000) >>> 16,
      a = ( (num & 0xFF000000) >>> 24 ) / 255 ;
  return rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/*
----------- CONECTAR ----------------
*/
client.connect(options);
