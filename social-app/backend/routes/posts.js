const { Router } = require("express");
const router = Router();

router.post("/", require("../controllers/posts/getAll"));

module.exports = router;
