const express = require("express");
const router = express.Router();

let users = [
  { username: "mintes", password: "123" },
  { username: "jossy", password: "321" },
];

router.post("/login", (req, res) => {
  let filtered = users.filter(
    (user) =>
      req.body.username === user.username && req.body.password === user.password
  );
  console.log(filtered);
  if (filtered.length) {
    res.json({ token: "jwt_token" });
  } else {
    res.json("wrong password or username");
  }
});

router.use((req, res, next) => {
  if (req.headers.authorization) {
    if (req.headers.authorization.split(" ")[1] === "jwt_token") {
      next();
    } else {
      res.json([{ status: "forbidden" }]);
    }
  } else {
    res.json([{ status: "unauthorized" }]);
  }
});

module.exports = router;
