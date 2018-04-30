
module.exports = function(app){

  var module = {};

  app.get('/api', function (req, res) {
    res.sendFile('./public/index.html', {root: __dirname })
    //res.send("respondiendo en api");
  });

  return module;
}
