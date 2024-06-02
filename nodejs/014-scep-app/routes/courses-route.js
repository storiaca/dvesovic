const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");

router.get("/", coursesController.index);
router.get("/create", coursesController.create);

/**
 * POST
 */
router.post("/store", coursesController.store);

module.exports = router;
