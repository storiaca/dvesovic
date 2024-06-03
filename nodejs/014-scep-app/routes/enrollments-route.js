const db = require("../database/config");
const express = require("express");
const router = express.Router();
const enrollmentsController = require("../controllers/enrollmentsController");

router.post("/store", enrollmentsController.index);

module.exports = router;
