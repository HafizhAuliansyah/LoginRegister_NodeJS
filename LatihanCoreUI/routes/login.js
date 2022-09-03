const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", passport.authenticate("local", { failureRedirect: "/" }), function (req, res) {
  res.redirect("/dashboard");
});

module.exports = router;
