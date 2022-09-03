const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
router.get("/", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render("index", {
    username: req.user.username,
    session_age: req.session.cookie.maxAge,
  });
});
module.exports = router;
