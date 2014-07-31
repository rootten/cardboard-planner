(function() {
  var mongo = require('../db');
  module.exports = function(app) {


 
    return app.get('/projects', function(req, res) {
	  mongo.db.collection("projects").find().toArray(function(err, projects){
		if(err){
			throw err;
		}
		res.json(projects);
	  })
    });
  };

}).call(this);
