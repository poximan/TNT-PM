require("../../crud/src/bin/www");

// for every URL path that starts with /api/, send request to upstream API service
var toNodeRed = function(host, url) {

  /*
  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular
  y una cadena especificada. Devuelve true o false.
  */
  if(/^\/red/.test(url) || /^\/hmi/.test(url)) {
     return 'http://node-red:8000';
  }
}

var toAuthCrud = function(host, url) {
  if(/^\//.test(url))
    return 'http://localhost:3000';
}

// assign high priority
toNodeRed.priority = 100;
toAuthCrud.priority = 100;

var proxy = new require('redbird')({
   port: 80,
   resolvers: [
   toNodeRed,
   toAuthCrud
 ]
})
