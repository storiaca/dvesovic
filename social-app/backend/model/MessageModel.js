const { model, Schema } = require("mongoose");

const MessageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, required: true },
  receiverId: { type: Schema.Types.ObjectId, required: true },
  message: { type: String, required: true },
  viewAt: { type: Date, default: null },
  createdAt: { type: Date, default: () => new Date().getTime() },
});

const MessageModel = model("messages", MessageSchema);
module.exports = MessageModel;
