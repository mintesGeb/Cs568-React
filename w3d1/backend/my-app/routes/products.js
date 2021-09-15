var express = require("express");
var router = express.Router();

let products = [
  {
    id: 1,
    name: "pr1",
    price: 10,
    brand: "apple",
    model: "md105",
    reputation: 10,
  },
  {
    id: 2,
    name: "pr2",
    price: 15,
    brand: "samsung",
    model: "md200",
    reputation: 10,
  },
];
let prodIds = 3;

let reviews = [
  {
    _id: 1,
    id: 1,
    title: "wow wow wow",
    description: "it is so amazing ",
    rating: 3,
  },
  { _id: 2, id: 1, title: "love it", description: "love using it ", rating: 2 },
  {
    _id: 3,
    id: 2,
    title: "not worth it",
    description: "used it for a day",
    rating: 1,
  },
];
let reviewIds = 4;

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
router.get("/:id/reviews/:rid", function (req, res, next) {
  let filtered = reviews.filter((rev) => rev.id == req.params.id);
  let reviewById = filtered.find((review) => review._id == req.params.rid);
  res.json(reviewById);
});

router.post("/", (req, res) => {
  let newProd = req.body;
  newProd.id = prodIds++;
  products.push(newProd);
  res.json("successful");
});

router.post("/add-review", (req, res) => {
  console.log(req.body.rating);

  let newProductList = products.map((prod) => {
    if (prod.id == req.body.id) {
      let copy = { ...prod };
      console.log(copy.reputation);
      if (req.body.rating == 3) {
        copy.reputation = copy.reputation + 2;
      } else if (req.body.rating == 1) {
        copy.reputation = copy.reputation - 1;
      }
      console.log(copy.reputation, copy);

      return copy;
    }
    return prod;
  });
  products = newProductList;

  let newReview = req.body;
  newReview._id = reviewIds++;
  reviews.push(newReview);

  res.json("done");
});

router.put("/:id/reviews/:rid", (req, res) => {
  console.log(req.params, req.body);

  //   let oldReview = reviews.find((review) => review._id == rid);
  //   let diff;

  //   if (oldReview.rating === req.body.rating) {
  //     diff = 0;
  //   } else if (oldReview.rating == 3 && req.body.rating == 1) {
  //     diff = -3;
  //   } else if (oldReview.rating == 3 && req.body.rating == 2) {
  //     diff = -2;
  //   } else if (oldReview.rating == 2 && req.body.rating == 1) {
  //     diff = -1;
  //   } else if (oldReview.rating == 2 && req.body.rating == 3) {
  //     diff = 2;
  //   } else if (oldReview.rating == 1 && req.body.rating == 2) {
  //     diff = 1;
  //   } else if (oldReview.rating == 1 && req.body.rating == 3) {
  //     diff = 3;
  //   }

  //   products.map((prod) => {
  //     if (prod.id == req.body.id) {
  //       let copy = { ...prod };
  //       copy.reputation = copy.reputation + diff;
  //       return copy;
  //     }
  //     return prod;
  //   });

  let filtered = reviews.filter((rev) => rev._id != req.params.rid);
  filtered.push(req.body);
  reviews = filtered;

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
