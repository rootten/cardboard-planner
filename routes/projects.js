(function() {
  var mongo = require('../db');
  module.exports = function(app) {


 
    return app.get('/projects', function(req, res) {
	  mongo.db.collection("projects").find({}, {name: 1, resources: 1}).toArray(function(err, projects){
		if(err){
			throw err;
		}

		res.json(projects);

		// mongo.db.collection("users").find({}, {name: 1}).toArray(function(err, users){
		// 	if(err){
		// 		throw err;
		// 	}


		// 	res.json(projects);
		// }

		//mongo.db.collection("user").
	  })
    });
  };

}).call(this);
