const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema(
  {
    fileName: String,
    storeName: String,
    type: String,
    size: Number,
    createdAt: {
      type: Date,
      default: () => {
        return new Date();
      },
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("File", FileSchema);

module.exports = File;
