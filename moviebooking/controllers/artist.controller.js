const db = require("../models");
const Artist = db.artist;

exports.findAllArtist = (req, res) => {
  Artist.find({})
    .select("artist")
    .distinct("artist")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Internal error occured",
      });
    });
};
