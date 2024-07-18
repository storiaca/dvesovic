const { SERVER_ERROR } = require("../../config/statusCodes");
const PostModel = require("../../model/PostModel");
const addNewPost = async (req, res, next) => {
  try {
    let tags = req.body.tags.map((tag) => {
      return { name: tag };
    });
    const newPost = new PostModel({
      ...req.body,
      tags,
      userId: req.locals._id,
    });
    const savePost = await newPost.save();
    res.send(savePost);
  } catch (error) {
    console.log(error);
    res.status(415).send(error.message);
  }
};

module.exports = addNewPost;
