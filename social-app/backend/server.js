const express = require("express");
const mongoose = require("mongoose");
process.env.DB_URI;
const server = express();

server.use(express.json());

const connection = mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

server.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  }
});
