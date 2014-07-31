(function() {
  var fs;

  fs = require("fs");

  module.exports = function(app) {
    fs.readdirSync(__dirname).forEach(function(file) {
      var name;
      if (file === "index.coffee" || file === "index.js") {
        return;
      }
      name = file.substr(0, file.indexOf("."));
      require("./" + name)(app);
    });
  };

}).call(this);
