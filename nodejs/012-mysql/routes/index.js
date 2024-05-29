const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/", async (req, res) => {
  const [data] = await db.query("SELECT * FROM profiles");
  //console.log(data);

  res.render("index", { data });

  // db.query("SELECT * FROM profiles", (err, data) => {
  //   console.log(data);
  //   res.send("Ok");
  // });
});

router.post("/create", async (req, res) => {
  const { full_name, email } = req.body;

  await db.query(
    `INSERT INTO profiles (full_name, email) VALUES('${full_name}','${email}')`
  );
  res.redirect("/");
});

router.get("/change/:id/:status", async (req, res) => {
  const { id, status } = req.params;
  const sql = `UPDATE profiles SET 
  active = ${status}
  WHERE id = ${id}
  ;`;
  const updateStatus = await db.query(sql);
  console.log(updateStatus);
  res.redirect("/");
});

module.exports = router;
