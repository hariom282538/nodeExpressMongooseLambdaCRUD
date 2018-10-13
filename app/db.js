const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected = false;
module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }
  console.log('=> using new database connection : ' + dbConfig.url);
  return mongoose.connect(dbConfig.url)
    .then(db => { 
      isConnected = db.connections[0].readyState;
      return Promise.resolve();
    })
    .catch(error => {
      return Promise.reject();
    });
};