const { Router } = require("express");
const router = Router();

router.use("/login", require("../controllers/auth/login"));

router.use("/register", require("../controllers/auth/register"));

module.exports = router;
