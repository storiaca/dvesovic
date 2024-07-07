const PostModel = require("../../model/PostModel");
const joinUserToPost = require("../../joins/joinUserToPost");

const getPostByTag = async (req, res, next) => {
  let { tagName } = req.params;
  try {
    const posts = await PostModel.aggregate([
      { $match: { "tags.name": tagName } },
      { limit: 9 },
      ...joinUserToPost,
    ]);
    res.send(posts);
  } catch (error) {
    res.status(415).send(error.message);
  }
};

module.exports = getPostByTag;
