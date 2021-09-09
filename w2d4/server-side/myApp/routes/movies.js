const express = require("express");
const router = express.Router();
const getDB = require("../utils/database").getDB;
const authAdmin = require("../controller/authController").authorizeAdmin;

router.get("/", (req, res) => {
  //   res.json({ x: 4 });
  let movies = getDB().collection("movies").find().toArray();
  movies.then((data) => {
    res.json(data);
  });
});

router.get("/:id", authAdmin, (req, res) => {
  //   res.json({ x: 4 });
  let movie = getDB().collection("movies").findOne({ name: req.params.id });
  movie.then((data) => {
    res.json(data);
  });
});

module.exports = router;
