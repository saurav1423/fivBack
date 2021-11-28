const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.post("/action", (req, res) => {
  try {
    var userData = {
      name: req.body.name,
      email: req.body.email,
    };
    new User(userData).save().then((data) => res.json({ data }));
  } catch (err) {
    console.log(err);
  }
});

router.get("/data", (req, res) => {
  User.find()
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
