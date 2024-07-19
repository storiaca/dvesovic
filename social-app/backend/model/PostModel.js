const { model, Schema } = require("mongoose");

const TagSchema = new Schema(
  {
    name: { type: String, require: true },
  },
  {
    _id: false,
    versionKey: false,
  }
);

const PostSchema = new Schema({
  body: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date().getTime() },
  image: {
    type: String,
    default: null,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  reactions: {
    type: Number,
  },
  tags: { type: [TagSchema] },
  title: {
    type: String,
    require: true,
  },
  userId: { type: Schema.Types.ObjectId, required: true },
});

const PostModel = model("posts", PostSchema);
module.exports = PostModel;
