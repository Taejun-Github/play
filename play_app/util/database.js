const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect("mongodb+srv://tjkimin2021:playground@playground.ilxoi6j.mongodb.net/?retryWrites=true&w=majority")
        .then((client) => {
            console.log(client);
            _db = client.db();
            callback(client);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
