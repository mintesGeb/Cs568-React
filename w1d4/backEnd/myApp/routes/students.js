const express = require("express");
const router = express.Router();

let students = [
  { id: 1, fname: "mintes", lname: "gebre", age: 30 },
  { id: 2, fname: "jos", lname: "tek", age: 26 },
];

router.get("/", (req, res) => {
  //   students.forEach((stu) => {
  //     res.send(stu);
  //     // res.json({status:success, data: stu});
  //   });
  res.json(students);
});

router.post("/", (req, res) => {
  console.log(req.body);
  students.push(req.body);
  res.json({ status: "success", data: req.body });
});

module.exports = router;
