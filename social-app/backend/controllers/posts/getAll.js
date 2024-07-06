const PostModel = require("../../model/PostModel");
const joinUserToPost = require("../../joins/joinUserToPost");

const getAll = async (req, res, next) => {
  try {
    const posts = await PostModel.aggregate([{ $limit: 9 }, ...joinUserToPost]);

    res.send(posts);
  } catch (error) {
    res.status(415).send(error.message);
  }
};

module.exports = getAll;
