module.exports = (app) => {
    const artist = require("../controllers/artist.controller.js");
  
    var router = require("express").Router();
  
    router.get("/artist", artist.findAllArtist);
  
    app.use("/api", router);
  };