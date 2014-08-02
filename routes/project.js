(function() {
  var mongo = require('../db');
  module.exports = function(app) {


 
    return app.get('/project/:code', function(req, res) {
	  mongo.db.collection("projects").findOne({"_id": req.params.code}, function(err, projects){
		if(err){
			throw err;
		}

		res.json(projects);

	  })
    });
  };

}).call(this);