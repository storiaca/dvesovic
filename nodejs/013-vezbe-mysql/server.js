const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use(routes);

app.listen(8080, () => {
  console.log("Server is listeninig on port 8080");
});
