const PostModel = require("../../model/PostModel");
const joinUserToPost = require("../../joins/joinUserToPost");

const getPostBySearch = async (req, res, next) => {
  let { keyword } = req.query;
  let term = [];
  if (typeof keyword === "string") {
    term.push(keyword);
  } else {
    term = [...keyword];
  }
  let query = [];
  term.forEach((item) => {
    query.push({ title: { $regex: item, $options: "i" } });
    query.push({ body: { $regex: item, $options: "i" } });
  });
  try {
    const posts = await PostModel.aggregate([
      {
        $match: {
          $or: [...query],
        },
      },
      { $limit: 9 },
      ...joinUserToPost,
    ]);
    res.send(posts);
  } catch (error) {
    res.status(415).send(error.message);
  }
};

module.exports = getPostBySearch;
