const http = require("http");
const fs = require("fs");
const makeCards = require("./makeCards");

makeCards();

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", "utf-8", (err, file) => {
    const fileConverted = file.replace("{{template}}", makeCards());
    res.end(fileConverted);
  });
});

server.listen(8080, () => {
  console.log("Listen on 8080 port");
});
