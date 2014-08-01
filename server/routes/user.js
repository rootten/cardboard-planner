(function() {
  var mongo = require('../db');
  module.exports = function(app) {


 
    return app.get('/user/:login', function(req, res) {
	  mongo.db.collection("users").findOne({"_id": req.params.login}, function(err, projects){
		if(err){
			throw err;
		}

		res.json(projects);

	  })
    });
  };

}).call(this);