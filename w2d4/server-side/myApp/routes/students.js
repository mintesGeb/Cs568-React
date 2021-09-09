const express = require("express");
const router = express.Router();
const getDB = require("../utils/database").getDB;

router.get("/", (req, res) => {
  getDB()
    .collection("students")
    .find()
    .toArray()
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
