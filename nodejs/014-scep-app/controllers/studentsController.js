const db = require("../database/config");

const index = async (req, res) => {
  const [students] = await db.query("SELECT * FROM students");
  res.render("students/index", {
    title: "Students",
    students,
    user: req.session.user,
  });
};

const create = (req, res) => {
  res.render("students/create", { title: "Students" });
};

const store = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  await db.query(
    "INSERT INTO students (first_name, last_name, email) VALUES (?, ?, ?)",
    [first_name, last_name, email]
  );
  res.redirect("/students");
};

const show = async (req, res) => {
  const { student_id } = req.params;
  const [[student]] = await db.query(
    "SELECT * FROM students WHERE student_id = ?",
    [student_id]
  );
  const [courses] = await db.query("SELECT * FROM courses");
  const [enrollments] = await db.query(
    `SELECT * FROM enrollments
    JOIN courses ON enrollments.course_id = courses.course_id
    WHERE student_id = ?`,
    [student_id]
  );
  const [payments] = await db.query(
    `SELECT * FROM payments 
    JOIN courses ON payments.course_id = courses.course_id
    WHERE student_id = ?`,
    [student_id]
  );

  const displayCourses = [];

  courses.forEach((course) => {
    let upisan = false;
    enrollments.forEach((enrollment) => {
      if (course.course_id === enrollment.course_id) {
        upisan = true;
      }
    });
    if (!upisan) {
      displayCourses.push(course);
    }
  });

  // function findUnenrolledCourses(studentId) {
  //   const enrolledCourseIds = enrollments
  //     .filter((enrollment) => enrollment.student_id === studentId)
  //     .map((enrollment) => enrollment.course_id);

  //   const unenrolledCourses = courses.filter(
  //     (course) => !enrolledCourseIds.includes(course.course_id)
  //   );
  //   return unenrolledCourses;
  // }

  // const unenrolledCourses = findUnenrolledCourses(parseInt(student_id));

  res.render("students/profile", {
    title: "Students",
    student,
    displayCourses,
    enrollments,
    payments,
  });
};

module.exports = {
  index,
  create,
  store,
  show,
};
