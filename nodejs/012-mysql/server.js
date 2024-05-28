const express = require("express");
const mysql2 = require("mysql2");
require("dotenv").config();

const db = mysql2
  .createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "bootjs",
  })
  .promise();

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // db.query("SELECT * FROM profiles", (err, data) => {
  //   console.log(data);
  //   res.send("Ok");
  // });
});

app.listen(8080, function () {
  console.log("Listening on 8080 port");
});
