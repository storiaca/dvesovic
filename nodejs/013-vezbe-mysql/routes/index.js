const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/", async (req, res) => {
  const sql = "SELECT * FROM profiles";
  const [data] = await db.query(sql);
  res.render("index", { data });
});

module.exports = router;
