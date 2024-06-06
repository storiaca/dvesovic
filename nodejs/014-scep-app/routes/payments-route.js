const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");
/**
 * POST
 */
router.post("/store", paymentsController.store);

module.exports = router;
