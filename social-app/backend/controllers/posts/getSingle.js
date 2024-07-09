const PostModel = require("../../model/PostModel");
const joinUserToPost = require("../../joins/joinUserToPost");
const joinCommentsToPost = require("../../joins/joinCommentsToPost");

const getSingle = async (req, res) => {
  try {
    let { id } = req.params;
    const post = await PostModel.aggregate([
      { $match: { $expr: { $eq: ["$_id", { $toObjectId: id }] } } },
      ...joinUserToPost,
      ...joinCommentsToPost,
    ]);
    res.send(post[0]);
  } catch (error) {
    res.status(415).send(error.message);
  }
};

module.exports = getSingle;
