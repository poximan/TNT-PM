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
const suscrip_nuevo_todas = suscrip_nuevo+"/#";
const suscrip_editar = "/canvas/editar";
const suscrip_editar_todas = suscrip_editar+"/#";
const suscrip_coccion_tambor_presion = "/pm/prod-cerveza/coccion/tambor/presion"

const nuevo_rectangulo = "/rect"
const nuevo_circulo = "/circle"

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

  if(message.topic.startsWith(suscrip_nuevo))
    agregarGrafico(message)
  else
    editarAtributo(message)
};

var options = {
  onSuccess: () => {
    console.log('conectado');

    client.subscribe(suscrip_nuevo_todas, {
      onSuccess: () => { console.log('suscripto a ' + suscrip_nuevo_todas); },
      onFailure: () => { console.log('no se pudo realizar suscripcion a ' + suscrip_nuevo_todas); }
    })

    client.subscribe(suscrip_editar_todas, {
      onSuccess: () => { console.log('suscripto a ' + suscrip_editar_todas); },
      onFailure: () => { console.log('no se pudo realizar suscripcion a ' + suscrip_editar_todas); }
    })

    client.subscribe(suscrip_coccion_tambor_presion, {
      onSuccess: () => { console.log('suscripto a ' + suscrip_coccion_tambor_presion); },
      onFailure: () => { console.log('no se pudo realizar suscripcion a ' + suscrip_coccion_tambor_presion); }
    })
  },
  onFailure: () => { console.log('no se pudo conectar'); }
};

/*
----------- FUNCIONES ----------------
*/
function agregarGrafico(message) {

  let sub_topico = message.topic.substring(suscrip_nuevo.length)
  let grafico = message.payloadString;

  var nuevo_grupo = svg_contenedor.append("g")
      .attr("topico", sub_topico)

  var nuevo_elemento = nuevo_grupo.selectAll(sub_topico.slice(1))
      .data(eval(grafico))
      .enter()
      .append(sub_topico.slice(1));

  if(sub_topico === nuevo_circulo){
    nuevo_elemento
    .attr("cx", function (d) { return d.cx; })
    .attr("cy", function (d) { return d.cy; })
    .attr("r", function (d) { return d.r; })
    .style("stroke", function (d) { return d.stroke; })
    .style("stroke-width", function (d) { return d.stroke_width; })
    .style("fill", function (d) { return d.fill; })
  }

  if(sub_topico === nuevo_rectangulo){
    nuevo_elemento
    .attr("x", function (d) { return d.x; })
    .attr("y", function (d) { return d.y; })
    .attr("height", function (d) { return d.height; })
    .attr("width", function (d) { return d.width; })
    .style("fill", function (d) { return d.fill; })
  }

  adaptarArea()
}

function editarAtributo(message) {

  let selection = d3.select("svg").selectAll('[topico="' + message.topic + '"]');
  let params = JSON.parse(message.payloadString);

  selection.attr("fill", escalar(params));
}

function escalar(params) {
  return rgb(parseInt(params) * (65535/5));
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
----------- REDIMENSIONAR AREA SVG ----------------
*/
function adaptarArea() {
  var svgs = document.getElementsByTagName("svg");

  var svg = svgs[0],
  box = svg.getBBox(),
  //viewBox = [box.x, box.y, box.width, box.height].join(" ");
  viewBox = [0, 0, 500, 500].join(" ");

  svg.setAttribute("viewBox", viewBox);
}

/*
----------- CONECTAR ----------------
*/
client.connect(options);
