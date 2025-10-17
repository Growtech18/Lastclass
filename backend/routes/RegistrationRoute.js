const express = require("express");
const router = express.Router();
const { Registration } = require("../controllers/Registration.js");

router.post("/signup", Registration);

module.exports = router;