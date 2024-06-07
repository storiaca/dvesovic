const express = require("express");
const mongojs = require("mongojs");

const db = mongojs("ivanadb", ["todos"]);
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/todos", (req, res) => {
  db.todos.find({}, (err, todos) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(todos);
  });
});

app.post("/api/v1/todos", (req, res) => {
  const { msg, level } = req.body;
  db.todos.insert({ msg: msg, done: false, level: level }, (err, todo) => {
    res.json(todo);
  });
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
