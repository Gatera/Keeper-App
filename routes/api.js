const express = require("express");
const router = express.Router();
const Keep = require("../models/keep");

router.get("/", (req, res) => {
  Keep.find({})
    .then((data) => {
      console.log("data: ", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
});

// router.route("/api").get(function (req, res, next) {
//   Keep.find({}, function (err, data) {
//     assert.equal(err, null);
//     res.json(data);
//   });
// });

router.get("/name", (req, res) => {
  const data = {
    username: "Gatera",
    age: 5,
  };
  res.json(data);
});

router.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const newKeep = new Keep(data);

  newKeep.save((err) => {
    if (err) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    return res.json({ msg: "Data well received" });
  });
});

module.exports = router;
