const express = require("express");
const router = express.Router();
const UserDetails = require("../models/user");
const userController = require("../Controller/UserController");
router.get("/", (req, res) => {
   res.render("register");
});
router.post("/add", (req, res) => {
   userController.registerUser(req, res);
});

module.exports = router;
