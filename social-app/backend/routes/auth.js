const { Router } = require("express");
const router = Router();

router.use("/login", require("../controllers/auth/login"));

module.exports = router;
