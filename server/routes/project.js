(function() {
  var mongo = require('../db');
  module.exports = function(app) {


 
    return app.get('/project', function(req, res) {
	  mongo.db.collection("projects").find({}, {name: 1, resources: 1}).toArray(function(err, projects){
		if(err){
			throw err;
		}

		res.json(projects);

	  })
    });
  };

}).call(this);