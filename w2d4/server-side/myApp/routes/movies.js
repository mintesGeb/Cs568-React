const express = require("express");
const router = express.Router();
const getDB = require("../utils/database").getDB;
const ObjectId = require("../utils/database").ObjectId;
const authAdmin = require("../controller/authController").authorizeAdmin;

router.get("/", (req, res) => {
  let movies = getDB().collection("movies").find().toArray();
  movies.then((data) => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  let movie = getDB().collection("movies").findOne({ _id: new ObjectId(req.params.id )});
  movie.then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  getDB()
    .collection("movies")
    .insertOne(req.body)
    .then((data) => {
      res.json(data);
    });
});

router.put("/:id", (req, res) => {
  getDB()
    .collection("movies")
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
    .then((data) => {
      res.json({ data });
    });
});

module.exports = router;
