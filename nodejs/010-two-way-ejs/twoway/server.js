const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css/"));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", function (req, res) {
//   fs.readFile("./messages.json", "utf-8", (err, content) => {
//     let arr = JSON.parse(content);
//     fs.writeFile("./messages.json", JSON.stringify(arr), (err) => {
//       res.send(JSON.stringify({ status: "super", data: arr }));
//     });
//   });
// });

app.post("/messages", (req, res) => {
  fs.readFile("./messages.json", "utf-8", (err, content) => {
    let arr = JSON.parse(content);
    req.body.date = new Date();
    arr.push(req.body);
    fs.writeFile("./messages.json", JSON.stringify(arr), (err) => {
      res.send(JSON.stringify({ status: "super", data: arr }));
    });
  });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
