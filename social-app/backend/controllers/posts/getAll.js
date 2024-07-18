const PostModel = require("../../model/PostModel");
const joinUserToPost = require("../../joins/joinUserToPost");

const getAll = async (req, res, next) => {
  try {
    const posts = await PostModel.aggregate([
      { $sort: { createdat: -1 } },
      { $limit: 30 },
      ...joinUserToPost,
      {
        $lookup: {
          from: "likes",
          localField: "_id",
          foreignField: "postId",
          as: "likes",
          pipeline: [
            {
              $project: {
                userId: 1,
                _id: 0,
              },
            },
          ],
        },
      },
    ]);

    res.send(posts);
  } catch (error) {
    res.status(415).send(error.message);
  }
};

module.exports = getAll;
