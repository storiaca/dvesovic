const express = require("express");
const data = require("./users.json");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // ????? database =>
  res.render("index", { users: data });
});

app.get("/user/:id", (req, res) => {
  // console.log(req.params);
  let id = req.params.id;
  const currentUser = data.find((user) => user.id == id);
  res.render("user", { user: currentUser });
});

app.listen("8080", () => {
  console.log("Server is listening on port 8080");
});
