const express = require("express");
const router = express.Router();
const { ROLE } = require("../models/role");
const { routingRole } = require("../middleware/authorize");
const connectEnsureLogin = require("connect-ensure-login");
const controller = require("../Controller/UserController");

router.get("/", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
   controller.showDashboard(req, res);
});

module.exports = router;
