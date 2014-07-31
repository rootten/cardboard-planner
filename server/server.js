(function() {
  var app, communicator, device, express, io, path, runningPortNumber, server, winston;

  express = require("express");

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




  server.listen(9000);

}).call(this);
