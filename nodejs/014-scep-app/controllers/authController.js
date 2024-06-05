const db = require("../database/config");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [[user]] = await db.query(`SELECT * FROM admins WHERE email = ?`, [
      email,
    ]);
    console.log(user);
    if (user) {
      if (user.password === password) {
        req.session.user = user;
        res.redirect("/students");
      } else {
        res.redirect("/");
      }
    } else {
      res.send("User not found");
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
module.exports = {
  login,
  logout,
};
