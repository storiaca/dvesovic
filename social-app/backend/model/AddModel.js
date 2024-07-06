const { model, Schema } = require("mongoose");

const AddSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  startDate: {
    type: Date,
    default: null,
  },
  endDate: {
    type: Date,
    default: null,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, required: true },
});

const AddModel = model("adds", AddSchema);
module.exports = AddModel;
