require("../../crud/src/bin/www");

// for every URL path that starts with /api/, send request to upstream API service
var customResolver1 = function(host, url, req) {
  /*
  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular
  y una cadena especificada. Devuelve true o false.
  */
  if(/^\/red/.test(url)){
     return 'http://node-red:8000/red';
  }
};

// assign high priority
customResolver1.priority = 100;

var proxy = new require('redbird')({
   port: 80,
   resolvers: [
   customResolver1
 ]
})
