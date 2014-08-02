(function() {
	var mongo = require('../db');
	module.exports = function(app) {



		return app.get('/createUser/:id', function(req, res) {

			var document = {

				_id: req.params.id,
				title: "consultant",
				firstName: "CON_Name",
				lastName: "CON_lastName"
			};

			mongo.db.collection("users").insert(document, function(error, records) {
				if (error) {
					throw error;
				}
			});



		});
	};

}).call(this);