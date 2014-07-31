(function() {
  var app, communicator, device, express, io, path, runningPortNumber, server, winston, settings;
  settings = require("./settings");
  express = require("express");
  var mongo = require("./db");

  app = express();


  server = require("http").createServer(app);


  device = require("express-device");

  path = require('path');

  runningPortNumber = process.env.PORT || 1234;

  app.configure(function() {
    app.use(express["static"](path.join(__dirname, '../app')));
    app.use(express["static"](path.join(__dirname, '../tmp')));
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
