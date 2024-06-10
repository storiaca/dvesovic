const express = require("express");

const mongoose = require("./database/config");

const app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));

app.use("/", require("./routes/index"));

app.use("/api/v1", require("./routes/index"));

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
