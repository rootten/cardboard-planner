(function() {
	var mongo = require('../db');
	module.exports = function(app) {
		return app.get('/createSampleProjects', function(req, res) {

            var projects = [{
                _id: "pong",
				name: "Pong",
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
            },
            {
                _id: "bing",
                name: "Bing",
                customer: {
                    code: "CLI2",
                    name: "CLIENT2",
                },
                description: "boring project",
                resources: [{
                    userId: "tskucha",
                    role: "consultant",
                    firstName: "Tomasz",
                    lastName: "Skucha"
                }, {
                    userId: "tliptak",
                    role: "consultant",
                    firstName: "Tomasz",
                    lastName: "Liptak"
                }, {
                    userId: "mjasiura",
                    role: "consultant",
                    firstName: "Micha?",
                    lastName: "Jasiura"
                } ]
            },
            {
                _id: "Bang",
                name: "Bang",
                customer: {
                    code: "CLI3",
                    name: "CLIENT3",
                },
                description: "boring project",
                resources: [{
                    userId: "mkrzek",
                    role: "consultant",
                    firstName: "Micha?",
                    lastName: "Krzek-Lubowiecki"
                }, {
                    userId: "dwojdan",
                    role: "consultant",
                    firstName: "Damian",
                    lastName: "Wojdan"
                }, {
                    userId: "tciesiolka",
                    role: "consultant",
                    firstName: "Tomasz",
                    lastName: "Ciesio?ka"
                } ]
            }
                            
            ];
		    mongo.db.collection("projects").drop(function(err) {
		        if (err) {
		            throw err;
                }
                mongo.db.collection("projects").insert(projects, function (error, records) {
                    if (error) {
                        throw error;
                    }
                    res.send(200);
                });
		    });
			
		});
	};

}).call(this);