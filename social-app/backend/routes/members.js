const { Router } = require("express");
const router = Router();

router.get("/", require("../controllers/member/getAllMembers"));

module.exports = router;
