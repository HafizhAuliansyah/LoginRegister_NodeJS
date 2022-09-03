const express = require("express");
const router = express.Router();
const UserDetails = require("../models/user");

router.get("/", (req, res) => {
  res.render("register");
});
router.post("/add", (req, res) => {
  console.log(req);
  UserDetails.register({ username: req.body.username, active: false }, req.body.password);
  res.redirect("/login");
});

module.exports = router;
