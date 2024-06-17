const express = require("express");
const mongoose = require("mongoose");
process.env.DB_URI;
const fileUpload = require("express-fileupload");
// const path = require("path");
// const FileUpload = require("./libs/fileUpload");
const server = express();

const connection = mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(fileUpload());

server.set("view engine", "ejs");
server.use("/", require("./routes"));
server.use((err, req, res, next) => {
  res.render("error_page", {
    errorMsg: err.message,
    cbUrl: req.headers.referer,
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// server.post("/upload", (req, res) => {
//     console.log(req.files);
//     let inputFileName = req.body.fileName;
//     let file = new FileUpload(req.files.chosenFile, [".jpg", ".png", ".jpeg"], 3 * FileUpload.MB);

//     if (file.isValid()) {
//         file.save().then((result) => {
//             console.log(result);
//             console.log(file.storeName);
//         })
//             .catch((error) => {
//                 console.log(error);
//             });
//     } else {
//         console.log(file.fileErrors);
//     }

// });
