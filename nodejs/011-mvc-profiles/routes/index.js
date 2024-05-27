const express = require("express");

const homeCtrl = require("../controllers/homeCtrl");
const profileCtrl = require("../controllers/profileCtrl");

const router = express.Router();

router.get("/", homeCtrl);

router.get("/profile/:account_id", profileCtrl.index);

router.get("/profile/:id/delete", profileCtrl.deleteProfile);

module.exports = router;
