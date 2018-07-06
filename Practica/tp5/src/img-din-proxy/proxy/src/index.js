require("../../auth-crud/src/bin/www");
require("../../red-crud/src/bin/www");

// for every URL path that starts with /api/, send request to upstream API service
var toNodeRed = function(host, url) {

  let nueva_url = url.slice(1);
  console.log(nueva_url);

  let res = /^\/red-fab/.test(url) || /^\/hmi/.test(url);
  console.log("/red -> " + res);
  /*
  El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular
  y una cadena especificada. Devuelve true o false.
  */
  if(res) return 'http://node-red\-'+ nueva_url + ':8000';
}

var toAuthCrud = function(host, url) {

  let res = /^\/auth-crud/.test(url);
  console.log("/auth-crud -> " + res);

  if(res) return 'http://localhost:3000';
}

var toRedCrud = function(host, url) {

  let res = /^\/red-crud/.test(url);
  console.log("/red-crud -> " + res);

  if(res) return 'http://localhost:3100';
}

// assign high priority
toNodeRed.priority = 100;
toAuthCrud.priority = 100;
toRedCrud.priority = 100;

var proxy = new require('redbird')({
   port: 80,
   resolvers: [
   toNodeRed,
   toAuthCrud,
   toRedCrud
 ]
})
