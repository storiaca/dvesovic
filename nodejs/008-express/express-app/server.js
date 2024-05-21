const express = require("express");

const app = express();

function info(req, res, next) {
  console.log("Pitanja je " + req.url);
  next();
}

app.use("/", info); // pokreni info na SVAKI request
// app.use("/courses", info); // pokreni info na SVAKI request ka courses ruti

// function display(req, res, next) {
//   console.log("Hello from display");
//   next();
// }

// app.get("/", [info, display], function (req, res) {
//   //info(req, res);
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/main.css", (req, res) => {
  res.sendFile(__dirname + "/main.css");
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
