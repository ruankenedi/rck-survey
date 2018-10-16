var MongoClient = require('mongodb').MongoClient;
const conn = { database: {} };
MongoClient.connect('mongodb://localhost:27017/vistoria', function (err, client) {
  if (err) throw err;

  conn.database = client.db('vistoria');
});

module.exports = conn;
