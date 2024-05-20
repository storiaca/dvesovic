const http = require("http");
const fs = require("fs");

const indexPage = fs.readFileSync("./index.html");
const cssPage = fs.readFileSync("./main.css");

const server = http.createServer((req, res) => {
  //console.log(req.url);
  //console.log(req.method);
  if (req.method === "GET") {
    if (req.url === "/") {
      res.end(indexPage);
    } else if (req.url === "/main.css") {
      res.end(cssPage);
    } else if (req.url === "/api") {
      const data = [
        {
          name: "Danilo",
          age: 46,
        },
        {
          name: "Ivana",
          age: 34,
        },
      ];
      res.end(JSON.stringify(data));
    } else {
      res.end();
    }
  } else if (req.method === "POST") {
    res.end("Stigli podaci iz forme");
  }
});

server.listen(8080, function () {
  console.log("Listening on port 8080");
});
