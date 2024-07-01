const { Router } = require("express");
const router = Router();

router.post(
  "/",
  require("../middleware/verifyToken"),
  require("../controllers/posts/getAll")
);

module.exports = router;
