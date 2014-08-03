(function() {
	var mongo = require('../db');
	module.exports = function(app) {
		return app.get('/createProject', function(req, res) {

			var document = {
				name: "City",
				customer: {
					code: "CLI1",
					name: "CLIENT1",
				},
				description: "boring project",
				resources: [{
					userId: "aczerski",
                    role: "consultant",
                    firstName: "Adam",
                    lastName: "Czerski"
				}, {
					userId: "spobiega",
					role: "consultant",
                    firstName: "Szymon",
                    lastName: "Pobiega"
				}, {
					userId: "agenesin",
					role: "consultant",
                    firstName: "Anna",
                    lastName: "Genesin"
				} ]
			};

			mongo.db.collection("projects").insert(document, function(error, records) {
				if (error) {
					throw error;
                }
			    res.send(200);
			});
		});
	};

}).call(this);