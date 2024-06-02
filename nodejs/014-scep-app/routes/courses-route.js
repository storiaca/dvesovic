const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");

router.get("/", coursesController.index);

/**
 * POST
 */
// router.post("/create", studentsController.store);

module.exports = router;
