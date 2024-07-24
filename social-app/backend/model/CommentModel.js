const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId, required: true },
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
  },
  { _id: false }
);

const CommentSchema = new Schema({
  body: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date().getTime() },
  postId: { type: Schema.Types.ObjectId, required: true },
  user: { type: UserSchema },
});

const CommentModel = model("comments", CommentSchema);
module.exports = CommentModel;
