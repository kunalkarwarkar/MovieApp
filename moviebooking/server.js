const express = require("express");
const cors = require("cors");
bodyParser = require("body-parser");
const app = express();
const PORT = 8085;

var corsOptions = {
  origin: "http://localhost:"+PORT,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
require("./routes/artist.routes")(app);
require("./routes/genre.routes")(app);
require("./routes/movie.routes")(app);
require("./routes/user.routes")(app);
app.listen(PORT, (req, res) => {
  console.log("Server Started");
});