const express = require("express");
const router = express.Router();
const getDB = require("../utils/database").getDB;
const authController = require("../controller/authController");

let students = [
  { id: 1, fname: "mintes", lname: "gebre", age: 30 },
  { id: 2, fname: "jos", lname: "tek", age: 26 },
];
let id = 2;

router.get("/", (req, res) => {
  let allStudents = getDB().collection("students").find().toArray();
  allStudents.then((data) => {
    res.json(data);
  });
});
router.get("/:fname", (req, res) => {
  let student = getDB()
    .collection("students")
    .findOne({ fname: req.params.fname });
  student.then((data) => {
    if (!data) {
      res.json("no student with this first name");
    }
    res.json(data);
  });
});

router.post("/", authController.authorizeAdmin, (req, res) => {
  // let studentToAdd = {
  //   _id: req.body._id,
  //   fname: req.body.fname,
  //   lname: req.body.lname,
  //   age: req.body.age,
  //   location: req.body.location,
  // };
  getDB()
    .collection("students")
    .insertOne(req.body)
    .then((data) => {
      res.json(data);
    });
});

router.put("/:fname", authController.authorizeAdmin, (req, res) => {
  getDB()
    .collection("students")
    .updateOne({ fname: req.params.fname }, { $set: req.body })
    .then((data) => {
      res.json(data);
    });
});

router.delete("/:fname", authController.authorizeAdmin, (req, res) => {
  getDB()
    .collection("students")
    .remove({ fname: req.params.fname })
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
