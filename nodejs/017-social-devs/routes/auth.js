const { Router } = require("express");
const router = Router();

router.post("/", require("../controllers/auth/register"));

module.exports = router;
