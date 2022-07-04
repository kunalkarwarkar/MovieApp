const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.artsits = require("./artist.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.genre = require("./genre.model.js")(mongoose);
db.movie = require("./movie.model.js")(mongoose);

module.exports = db; 