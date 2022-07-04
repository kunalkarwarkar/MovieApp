const db = require("../models");
const Movie = db.movie;

exports.findAllMovies = (req, res) => {
  const status = req.query.status;

  Movie.find({})
    .select("movie")
    .distinct("movie")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Movies.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Movie.findById({ _id: id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Movie with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Movie with id=" + id });
    });
};
exports.findShows = (req, res) => {
  const id = req.params.id;

  Movie.findById({ _id: id })
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Shows of Movie with id " + id });
      else res.send(data.shows);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Shows with id=" + id });
    });
};
