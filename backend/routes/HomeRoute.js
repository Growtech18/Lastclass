const express = require("express");
const router = express.Router();
const { Home } = require("../controllers/Homepage.js");
const { ChecKLogin } = require("../midllerware/CheckLogin.js")
router.get("/home", ChecKLogin, Home);

module.exports = router;