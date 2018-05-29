var http = require('http');
var express = require("express");

var app = express();

app.use("/red/msg", express.static("msg-public"));
var server = http.createServer(app);

server.listen(8100);
