const PostModel = require("../../model/PostModel");
const UserModel = require("../../model/UserModel");
const joinUserToPost = require("../../joins/joinUserToPost");

const getAll = async (req, res, next) => {
  //   const pageSize = 9;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  try {
    const count = await PostModel.countDocuments();
    const posts = await PostModel.aggregate([
      { $skip: (page - 1) * limit },
      { $limit: limit },
      ...joinUserToPost,
      {
        $lookup: {
          from: "likes",
          localField: "_id",
          foreignField: "postId",
          as: "likes",
          pipeline: [{ $project: { userId: 1, _id: 0 } }],
        },
      },
    ]);

    res.send({ posts, count });
  } catch (error) {
    res.status(415).send(error.message);
  }
};

module.exports = getAll;
