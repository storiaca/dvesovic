const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, file) => {
    res.render("index", { accounts: JSON.parse(file) });
  });
});

module.exports = router;
