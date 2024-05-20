const http = require("http");
const server = http.createServer((req, res) => {
  // logika????
  res.end("Hello");
});

server.listen(8080, function () {
  console.log("Listening on port 8080");
});
console.log("hello");
