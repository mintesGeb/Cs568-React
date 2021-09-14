const express = require("express");
const router = express.Router();

let myUsers = [
  { username: "mintes", password: 123 },
  { username: "jossy", password: 123 },
];
let token = "jwt_token";

router.post("/login", (req, res) => {
  console.log(req.body.username == myUsers[1].username);
  let filtered = myUsers.filter((user) => user.username === req.body.username);
  if (filtered.length) {
    res.json({ token });
  } else {
    res.json("wrong username or password");
  }
});

module.exports = router;
