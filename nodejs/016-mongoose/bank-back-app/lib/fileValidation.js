const path = require("path");
class FileValidation {
  static MB = 1024 * 1024;
  fileErrors = {};
  constructor(file, validTypes, validSize) {
    this.file = file;
    this.validTypes = validTypes;
    this.validSize = validSize;
    this.extensionName = path.extname(file.name).toLowerCase();
    this.validate();
  }

  validate = () => {
    if (!this.validTypes.includes(this.extensionName)) {
      this.fileErrors.fileType = `File type is not valid. Valid types are ${this.validTypes.join(
        ", "
      )}`;
    }
    if (this.validSize < this.file.size) {
      this.fileErrors.size = "File is to large must be under 3MB";
    }
  };

  save = async () => {
    this.storeName = new Date().getTime().toString() + this.extensionName;
    try {
      await this.file.mv(__dirname + "/../public/upload/" + this.storeName);
      return {
        msg: "File saved succesfully",
        storeName: this.storeName,
      };
    } catch (error) {
      console.log(error);
    }
  };

  isValid = () => {
    return Object.keys(this.fileErrors).length === 0;
  };

  errors = () => {
    return this.fileErrors;
  };
}

module.exports = FileValidation;
