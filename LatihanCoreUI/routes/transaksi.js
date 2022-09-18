const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const transaksiController = require("../Controller/TransaksiController");
const { ROLE } = require("../models/role");
const { routingRole } = require("../middleware/authorize");

router.get("/", connectEnsureLogin.ensureLoggedIn(), routingRole(ROLE.USER), (req, res) => {
   res.render("input_transaksi");
});
router.post("/input-transaksi", connectEnsureLogin.ensureLoggedIn(), routingRole(ROLE.USER), (req, res) => {
   transaksiController.inputTransaksi(req, res);
   res.redirect("/");
});

module.exports = router;
