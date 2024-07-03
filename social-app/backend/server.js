const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const { PORT } = require("./config/config");
process.env.DB_URI;
const server = express();

server.use(express.json());

server.use(cors());

const connection = mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

server.use("/api", require("./routes"));

server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});
