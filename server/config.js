var mongoose = require('mongoose');
var options = {
  useMongoClient: true,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

var uri = 'mongodb://localhost:27017/portfolio2';
module.exports = {
  db: {
    production: 'mongodb://admin:admin@ds153853.mlab.com:53853/portfolio',
    development: 'mongodb://localhost:27017/portfolio',
    test: "mongodb://localhost:27017/storeski-test",
  }
};
module.exports = uri, options;
