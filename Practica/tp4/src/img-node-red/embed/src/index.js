var http = require('http');
var express = require("express");
var RED = require("node-red");

// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use("/red", express.static("public"));
app.use("/red/mqtt", express.static("public"));

const resolve = require('path').resolve

app.get('/red/mqtt', function (req, res, next) {
  
  res.sendFile(resolve("index.html"), function (err) {
   if (err) {
     next(err);
   }
 });
});

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/sca",
    userDir:"/home/src/.nodered/",
    functionGlobalContext: { }    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(8000);

// Start the runtime
RED.start();
