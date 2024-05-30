const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/", async (req, res) => {
  const sql = "SELECT * FROM profiles";
  const [data] = await db.query(sql);
  res.render("index", { data });
});

router.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM profiles WHERE id = ${id};`;
  const user = await db.query(sql);
  console.log(user);
  res.redirect("/");
});

router.post("/create", async (req, res) => {
  const { full_name, email } = req.body;
  const sql = `INSERT INTO profiles (full_name,email) VALUES ('${full_name}','${email}' );`;

  const newUser = await db.query(sql);
  console.log(newUser);
  res.redirect("/");
});

router.get("/change/:id/:status", async (req, res) => {
  const { id, status } = req.params;
  const sql = `
  UPDATE profiles 
  SET active = ${status}
  WHERE id = ${id};
  `;
  const updateStatus = await db.query(sql);
  console.log(updateStatus);
  res.redirect("/");
});

module.exports = router;
