const express = require("express");
const router = express.Router();
const getDB = require("../utils/database").getDB;
const authAdmin = require("../controller/authController").authorizeAdmin;

router.get("/", (req, res) => {
  let movies = getDB().collection("movies").find().toArray();
  movies.then((data) => {
    res.json(data);
  });
});

router.get("/:title", authAdmin, (req, res) => {
  let movie = getDB().collection("movies").findOne({ name: req.params.title });
  movie.then((data) => {
    res.json(data);
  });
});

module.exports = router;
