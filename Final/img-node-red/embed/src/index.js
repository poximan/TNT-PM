var http = require('http');
var express = require("express");
var RED = require("node-red");
const resolve = require('path').resolve
let os = require('os')

require("./autenticacion");

console.log("Express: Ejecutando server en " + resolve().toString());

// Create an Express app
var app = express();
// Create a server
var server = http.createServer(app);

let ruta = "/red"

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot: ruta,
    httpNodeRoot: "/hmi",
    httpRoot: ruta,
    userDir:"/home/src/.nodered/",
    functionGlobalContext: { },    // enables global context
    storageModule: require("./http-storage"),
    credentialSecret: "abc"
  };

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);
// Serve the http nodes UI from /red
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(8000);

// Start the runtime
RED.start();
