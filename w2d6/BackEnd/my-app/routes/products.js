let express = require("express");
let router = express.Router();

let objects = [
  { id: 1, name: "tp1", price: 10, brand: "apple", modelName: "md101" },
  { id: 2, name: "tp2", price: 12, brand: "samsung", modelName: "md103" },
];
let maxId = 3;

router.get("/", (req, res) => {
  console.log();
  if (req.headers.authorization.split(" ")[1] === "jwt_token") {
    res.json(objects);
  } else {
    res.json("authorization problem");
  }
});
router.get("/:id/details", (req, res) => {
  // console.log(req.params.id);
  res.json(objects[Number(req.params.id) - 1]);
});
router.post("/create-product", (req, res) => {
  // console.log(req.headers.authorization.split(" ")[1]);
  if (req.headers.authorization.split(" ")[1] === "jwt_token") {
    let objectToAdd = req.body;
    objectToAdd.id = maxId++;
    objects.push(objectToAdd);
    res.json({ status: "successful" });
  } else {
    res.json("authorization problem");
  }
});
router.put("/:id", (req, res) => {
  // console.log(req.body, req.params.id);
  // res.json("successful");
  if (req.headers.authorization.split(" ")[1] === "jwt_token") {
    let filtered = objects
      .filter((prod) => prod.id !== req.params.id)
      .push(req.body);
    objects = filtered;
    console.log(objects);

    res.json({ status: "successful" });
  } else {
    res.json("authorization problem");
  }
});

module.exports = router;
