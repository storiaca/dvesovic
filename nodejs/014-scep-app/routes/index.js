const express = require("express");

const router = express.Router();

router.use("/", require("./home-route"));
router.use("/students", require("./students-route"));

module.exports = router;
