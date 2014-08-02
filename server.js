(function() {
  var settings = require("./settings");
  var express = require("express");
  var mongo = require("./db");
  var device = require("express-device");
  var app = express();


  var server = require("http").createServer(app);
  var path = require('path');


  app.configure(function() {
    app.use(express["static"](path.join(__dirname, './app')));
    app.use(device.capture());

  });

  app.use(function(req, res, next) {
    return next();
  });

  require('./routes')(app);

  mongo.init(function (error) {
    if (error)
        throw error;
    server.listen(settings.Port, function () {
        console.log('Server running at http://127.0.0.1:' + settings.Port);
	});
  });

}).call(this);
