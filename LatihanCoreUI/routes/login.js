const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  let message = req.session.messages;
  req.session.messages = [];
  res.render("login", { message: message });
});
router.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/",
    failureMessage: "Invalid username or password",
  }),
  function (req, res) {
    res.redirect("/dashboard");
  }
);

module.exports = router;
