module.exports = (app) => {
  const movies = require("../controllers/movie.controller.js");
  const router = require("express").Router();

  router.get("/movies", movies.findAllMovies);
  router.get("/movies/:movies?status=PUBLISHED", movies.findAllMovies);
  router.get("/movies/:movies?status=RELEASED", movies.findAllMovies);
  router.get("/movies/:movieId", movies.findOne);
  router.get(
    "/movies/:id/:title/:genre/:artist/:release_date/:publish_date",
    movies.findShows
  );
  app.use("/api", router);
};