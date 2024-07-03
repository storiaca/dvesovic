const { model, Schema } = require("mongoose");

const PostSchema = new Schema({});

const PostModel = model("posts", PostSchema);
module.exports = PostModel;
