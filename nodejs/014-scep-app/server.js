const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use(express.static(__dirname + "/node_modules/bootstrap-icons/font"));

app.use("/", require("./routes"));

app.listen(process.env.PORT, () => {
  console.log("Server is listeninig on port" + process.env.PORT);
});
