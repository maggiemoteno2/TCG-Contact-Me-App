const mongoose = require("mongoose");
require('dotenv').config()

const MongoServer = async (server) => {
  try {
    await mongoose.connect(process.env.MONGO_STRING, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
  
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = {MongoServer};