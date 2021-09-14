var express = require("express");
var router = express.Router();

let products = [
  { id: 1, name: "pr1", price: 10, brand: "apple", model: "md105" },
  { id: 2, name: "pr2", price: 15, brand: "samsung", model: "md200" },
];
let prodIds = 3;

let reviews = [
  { _id: 1, id: 1, title: "wow wow wow", description: "it is so amazing " },
  { _id: 2, id: 1, title: "love it", description: "love using it " },
  { _id: 3, id: 2, title: "not worth it", description: "used it for a day " },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(products);
});
router.get("/:id", function (req, res, next) {
  let product = products.find((prod) => prod.id == req.params.id);
  console.log(product);
  res.json(product);
});
router.get("/:id/reviews", function (req, res, next) {
  let filtered = reviews.filter((rev) => rev.id == req.params.id);
  res.json(filtered);
});
router.get;
router.post("/", (req, res) => {
  let newProd = req.body;
  newProd.id = prodIds++;
  products.push(newProd);
  res.json("successful");
});
router.put("/:id", (req, res) => {
  console.log(req.body, req.params.id);

  let filtered = products.filter((prod) => prod.id != req.params.id);
  let updated = req.body;
  updated.id = req.params.id;
  filtered.push(updated);
  products = filtered;
  res.json("successful");
});
router.delete("/:id", (req, res) => {
  let deleted = products.find((prod) => prod.id == req.params.id);
  products = products.filter((prod) => prod.id != req.params.id);
  res.json(deleted);
});

module.exports = router;
