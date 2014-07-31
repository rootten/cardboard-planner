(function() {
  module.exports = function(app) {


 
    return app.get('/rooms', function(req, res) {
      return res.send('stest');
    });
  };

}).call(this);
