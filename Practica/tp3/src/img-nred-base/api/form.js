
module.exports = function(app){

  var module = {};

  app.get('/api', function (req, res) {
    res.sendFile('./public/index.html', {root: __dirname })
    console.log("dirname");
    console.log(__dirname);
  });

  return module;
}
