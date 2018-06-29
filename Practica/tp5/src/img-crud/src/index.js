// for every URL path that starts with /api/, send request to upstream API service
var customResolver1 = function(host, url) {
  console.log(url);
  if(/^\/red\//.test(url)){
     return 'node-red/red';
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
