const express = require("express");
const routes = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use(routes);

app.listen(8080, function () {
  console.log("Listening on 8080 port");
});
