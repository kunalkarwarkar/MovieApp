var express = require('express');
var app = express();

app.get("/movies",(req, res, next)=>{
    res.send("All Movies Data in JSON format from Mongo DB")
})
app.get("/genres",(req, res, next)=>{
    res.send("All Genres Data in JSON format from Mongo DB")
})
app.get("/artists",(req, res, next)=>{
    console.log("All Artists Data in JSON format from Mongo DB")
})

app.listen(9000);