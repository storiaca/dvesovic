const PostModel = require("../../model/PostModel");
const getAll = async (req, res, next) => {
  try {
    const posts = await PostModel.find({}).limit(10);

    res.send(posts);
  } catch (error) {
    res.status(415).send(error.message);
  }
};

module.exports = getAll;
