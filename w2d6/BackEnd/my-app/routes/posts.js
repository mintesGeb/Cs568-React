let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.json({ a: 2 });
});
router.get("/:id", (req, res) => {
  res.json({ a: 3 });
});
router.post("/", (req, res) => {
  res.json({ a: 4 });
});

module.exports = router;
