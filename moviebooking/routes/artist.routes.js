module.exports = (app) => {
    const artist = require("../controllers/artist.controller.js");
  
    var router = require("express").Router();
  
    router.get("/artist", artist.findAllArtists);
  
    app.use("/api", router);
  };