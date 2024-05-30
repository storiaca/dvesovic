const db = require("../database");

const index = async (req, res) => {
  const sql = "SELECT * FROM profiles";
  const [data] = await db.query(sql);
  res.render("index", { data });
};
const deleteProfile = async (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM profiles WHERE id = ${id};`;
  const user = await db.query(sql);
  console.log(user);
  res.redirect("/");
};

const createProfile = async (req, res) => {
  const { full_name, email } = req.body;
  const sql = `INSERT INTO profiles (full_name,email) VALUES ('${full_name}','${email}' );`;

  const newUser = await db.query(sql);
  console.log(newUser);
  res.redirect("/");
};

const changeStatus = async (req, res) => {
  const { id, status } = req.params;
  const sql = `
  UPDATE profiles 
  SET active = ${status}
  WHERE id = ${id};
  `;
  const updateStatus = await db.query(sql);
  console.log(updateStatus);
  res.redirect("/");
};

const editProfile = async (req, res) => {
  const id = req.params.id;
  const sql = `
  SELECT * FROM profiles WHERE id = ${id}`;
  const [data] = await db.query(sql);
  res.render("edit", { data });
};

const updateProfile = async (req, res) => {
  const { full_name, email } = req.body;
  const { id } = req.params;
  const sql = `UPDATE profiles SET full_name = '${full_name}', email = '${email}' WHERE id = ${id};`;
  const user = await db.query(sql);
  console.log(user);
  res.redirect("/");
};

module.exports = {
  index,
  deleteProfile,
  createProfile,
  changeStatus,
  editProfile,
  updateProfile,
};
