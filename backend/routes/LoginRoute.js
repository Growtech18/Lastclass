const express = require("express");
const router = express.Router();
const { Login } = require("../controllers/Login.js");

router.post("/login", Login);

module.exports = router;