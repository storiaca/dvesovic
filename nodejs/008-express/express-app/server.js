const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/public"));

app.get("/wish", function (req, res) {
  // samo da odem do baze MySQL ili MongDB
  res.sendFile(__dirname + "/wish.json");
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});

// app.use("/", express.urlencoded({ extended: true }));
//app.use("/", exports.json());

// function info(req, res, next) {
//   console.log("Pitanja je " + req.url);
//   next();
// }

// app.use("/", info); // pokreni info na SVAKI request

// app.use("/courses", info); // pokreni info na SVAKI request ka courses ruti

// function display(req, res, next) {
//   console.log("Hello from display");
//   next();
// }

// app.get("/", [info, display], function (req, res) {
//   //info(req, res);
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/contact.html");
// });

// app.post("/userdata", (req, res) => {
//   console.log("Podaci stigli");
//   console.log(req.body);
//   // res.redirect('/')
//   res.end("Ok");
// });

// app.get("/main.css", (req, res) => {
//   res.sendFile(__dirname + "/main.css");
// });
