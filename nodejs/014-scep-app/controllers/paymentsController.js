const db = require("../database/config");

const index = async (req, res) => {
  const [students] = await db.query("SELECT * FROM students");
  res.render("students/index", {
    title: "Students",
    students,
    user: req.session.user,
  });
};

const store = async (req, res) => {
  const { student_id, course_id, amount } = req.body;
  await db.query(
    "INSERT INTO payments(student_id, course_id, amount) VALUES(?,?,?)",
    [student_id, course_id, amount]
  );
  res.redirect("/students/show/" + student_id);
};

module.exports = { index, store };
