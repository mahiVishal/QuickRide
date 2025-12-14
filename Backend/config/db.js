const mongoose = require("mongoose");

let MONGO_DB = {
  production: { url: process.env.MONGODB_PROD_URL, type: "Atlas" },
  development: { url: process.env.MONGODB_DEV_URL, type: "Atlas" },
};

let environment = process.env.ENVIRONMENT;

mongoose
  .connect("mongodb+srv://sinvishu123_db_user:2xEWgNwetni3lycK@cluster0.vf8bjfi.mongodb.net/test?appName=Cluster0")
  .then(() => {
    console.log("Connected to Mongo DB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB"+err);
  });

module.exports = mongoose.connection;
