const { Router } = require("express");
const verifyToken = require("../middleware/verifyToken");

const router = Router();

router.delete(
  "/:id",
  verifyToken,
  require("../conrollers/comments/deleteComment")
);

module.exports = router;
