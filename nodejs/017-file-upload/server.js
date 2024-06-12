const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const FileUpload = require("./libs/fileUpload");
const {buildFields} = require("express-fileupload/lib/utilities");
const server = express();

server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(fileUpload());

server.set("view engine", "ejs");
server.get("/", (req, res) => {
    res.render("index");
});

server.post("/upload", (req, res) => {
    console.log(req.files);
    let inputFileName = req.body.fileName;
    let file = new FileUpload(req.files.chosenFile, [".jpg", ".png", ".jpeg"], 3 * FileUpload.MB);

    if (file.isValid()) {
        file.save().then((result) => {
            console.log(result);
            console.log(file.storeName);
        })
            .catch((error) => {
                console.log(error);
            });
    } else {
        console.log(file.fileErrors);
    }


});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});