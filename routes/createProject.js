(function() {
	var mongo = require('../db');
	module.exports = function(app) {



		return app.get('/createProject', function(req, res) {

			var document = {
				name: "Mashreq",
				customer: {
					code: "CLI1",
					name: "CLIENT1",
				},
				description: "boring project",
				resources: [{
					userId: "adam1",
					role: "consultant"
				}, {
					userId: "adam2",
					role: "consultant"
				}, {
					userId: "adam3",
					role: "consultant"
				}, ]
			};

			mongo.db.collection("projects").insert(document, function(error, records) {
				if (error) {
					throw error;
				}
			});



		});
	};

}).call(this);