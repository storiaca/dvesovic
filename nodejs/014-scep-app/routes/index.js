const express = require("express");

const router = express.Router();

router.use(["/students", "/courses", "/enrollemnts"], (req, res, next) => {
  if (req.session.hasOwnProperty("user")) {
    if (req.session.user.role === "admin") {
      next();
    }
  } else {
    res.redirect("/");
  }
});

router.use("/", require("./home-route"));
router.use("/students", require("./students-route"));
router.use("/courses", require("./courses-route"));
router.use("/enrollments", require("./enrollments-route"));
router.use("/payments", require("./payments-route"));
router.use("/auth", require("./auth-route"));

module.exports = router;
