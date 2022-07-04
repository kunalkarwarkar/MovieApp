module.exports = (app) => {
    const genre = require("../controllers/genre.controller.js");

    var router = require("express").Router();

    router.get("/genre", genre.findAllGenre);

    app.use("/api", router);

} 