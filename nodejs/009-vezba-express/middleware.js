const users = require("./users.json");

function loggedUser(req, res, next) {
  const { name, password } = req.body;
  const user = users.find(
    (user) => user.name === name && user.password == password
  );
  if (user) {
    next();
  } else {
    res.redirect("/");
  }
}

function info(req, res, next) {
  console.log("Ovo je middlewares");
  next();
}

module.exports = { loggedUser, info };
