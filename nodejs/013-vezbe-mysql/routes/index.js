const express = require("express");
const db = require("../database");
const homeController = require("../controllers/homeController");
const router = express.Router();

router.get("/", homeController.index);

router.get("/delete/:id", homeController.deleteProfile);

router.post("/create", homeController.createProfile);

router.get("/change/:id/:status", homeController.changeStatus);

router.get("/edit/:id", homeController.editProfile);

router.post("/update/:id", homeController.updateProfile);

module.exports = router;
