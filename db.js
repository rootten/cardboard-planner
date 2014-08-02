
var Settings = require('./settings');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient
    , Server = mongo.Server;

module.exports.mongo = mongo;
module.exports.init = function (callback) {
    var mongoClient = new MongoClient(new Server(Settings.MongoDbServer, Settings.MongoDbPort));

    mongoClient.open(function (err, mongoClient) {
        if (err == null) {
            console.log('Connected to MongoDb');
        }
        var db1 = mongoClient.db(Settings.MongoDbDatabase);
        module.exports.client = mongoClient;
        module.exports.db = db1;
        callback(err);
    });
};