const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, function () {
  console.log("Listening on 8080 port");
});
