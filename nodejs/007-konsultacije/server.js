const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // logika????
  // if (req.url === "/users") {
  //   res.end(JSON.stringify({ name: "Aleksandar" }));
  // }

  const name = "Aleksandar";
  fs.readFile("./index.html", "utf-8", (err, file) => {
    console.log(file);
    let fileExport = file.replace("{{name}}", name);
    res.end(fileExport);
  });
});

server.listen(8080, function () {
  console.log("Listening on port 8080");
});
