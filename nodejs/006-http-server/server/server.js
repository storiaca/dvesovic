// const dayjs = require("dayjs");

// const now = new Date();

// console.log(dayjs(now).format("DD/MM/YYYY"));

const http = require("http");
// const net = require("net");

const server = http.createServer(function (req, res) {
  // console.log("Neki Japanac trazi nesto");
  res.write("<h1>Sacekaj malo Japanac</h1>");
  res.end();
});

server.listen(5000, function () {
  console.log("Pokrenuo se server");
});
