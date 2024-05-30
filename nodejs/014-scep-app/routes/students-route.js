const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentsController");

router.get("/", studentsController.index);

module.exports = router;
