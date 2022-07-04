var express = require("express");
var app = express();
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  app.get("/movies", (req, res, next) => {
    res.send("All Movies Data in JSON format from Mongo DB");
  });
  app.get("/genres", (req, res, next) => {
    res.send("All genres Data in JSON format from Mongo DB");
  });
  app.get("/artists", (req, res, next) => {
    console.log("All artists Data in JSON format from Mongo DB");
  });
  
  app.listen(9000);