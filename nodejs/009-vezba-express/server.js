const express = require("express");
const { loggedUser, info } = require("./middleware");

const PORT = 8080;

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get("*", info);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.post("/contact", loggedUser, (req, res) => {
  res.send("Uspesno logovanje");
});

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`);
});
