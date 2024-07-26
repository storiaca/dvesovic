const { Router } = require("express");
const router = Router();

router.use("/auth", require("./auth"));
router.use("/posts", require("./posts"));
router.use("/tags", require("./tags"));
router.use("/comments", require("./comments"));
router.use("/member", require("./members"));

module.exports = router;
