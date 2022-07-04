module.exports = (app) => {
    const movies = require("../controllers/movie.controller.js");
    const router = require("express").Router();
    router.get("/movies", movies.findAllMovies);
    router.get("/movies/:published", movies.findAllMovies);
    router.get("/movies/:released", movies.findAllMovies);
    router.get("/movies/:id", movies.findOne);
    router.get(
        "/movies/:id/:title/:genre/:artist/:release_date/:publish_date",
    movies.findShows
  );
  app.use("/api", router);
};