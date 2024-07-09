const { Router } = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = Router();

router.get("/", verifyToken, require("../controllers/posts/getAll"));
router.get(
  "/tag/:tagName",
  verifyToken,
  require("../controllers/posts/getPostByTag")
);
router.get("/:id", verifyToken, require("../controllers/posts/getSingle"));
router.post(
  "/comments/add",
  verifyToken,
  require("../controllers/posts/addComment")
);

module.exports = router;
