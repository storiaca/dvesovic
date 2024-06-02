const db = require("../database/config");

const index = async (req, res) => {
  const [courses] = await db.query("SELECT * FROM courses");
  res.render("courses/index", { title: "Courses", courses });
};

module.exports = { index };
