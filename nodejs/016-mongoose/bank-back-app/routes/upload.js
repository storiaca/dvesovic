const express = require("express");
const router = express.Router();
const FileValidation = require("../lib/fileValidation");
const File = require("../models/File");

router.post("/", async (req, res) => {
  const fileName = req.body.name;
  const file = req.files.file;
  const validTypes = [".jpg", ".png", ".jpeg"];
  try {
    const fileValidation = new FileValidation(
      file,
      validTypes,
      3 * FileValidation.MB
    );
    if (fileValidation.isValid()) {
      const result = await fileValidation.save();
      const fileForDB = new File({
        fileName: fileName,
        storeName: result.storeName,
        type: file.mimetype,
        size: file.size,
      });

      await fileForDB.save();
      console.log(result);
    } else {
      res.send({ msg: "File is not valid", errors: fileValidation.errors() });
    }
  } catch (error) {}
});

router.get("/", async (req, res) => {
  try {
    const files = await File.find();

    const filesImage = files.map((file) => {
      return {
        imageName: file.fileName,
        imageUrl: `/upload/${file.storeName}`,
      };
    });
    res.send({ images: filesImage });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
