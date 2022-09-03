const express = require("express");
const router = express.Router();
const passport = require("passport");
const loginRoutes = require("./login");
const registerRoutes = require("./register");
const dashboardRoutes = require("./dashboard");

router.get("/", (req, res) => {
  res.redirect("/dashboard");
});
router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/dashboard", dashboardRoutes);
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/login");
});

module.exports = router;
