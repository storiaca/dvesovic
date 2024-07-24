const { SERVER_ERROR, FORBIDDEN } = require("../../config/statusCodes");
const CommentModel = require("../../model/CommentModel");
const PostModel = require("../../model/PostModel");
const deleteComment = async (req, res, next) => {
  const { id } = req.params;
  const { postId } = req.query;
  const currentUser = req.locals;

  try {
    // ADMIN, AUTOR POSTA, AUTOR KOMENTARA
    if (currentUser.role === "admin") {
      let deleteComment = await CommentModel.deleteOne({ _id: id });
      res.send("Success, ADMIN");
    } else {
      const isAuthor = await PostModel.countDocuments({
        _id: postId,
        userId: currentUser._id,
      });
      if (isAuthor > 0) {
        let deleteComment = await CommentModel.deleteOne({ _id: id });
        res.send("Success, POST AUTHOR");
        return;
      } else {
        let deleteComment = await CommentModel.deleteOne({
          _id: id,
          "user.id": currentUser._id,
        });
        if (deleteComment) {
          res.send("Success, COMMENT AUTHOR");
          return;
        }
      }

      res.status(FORBIDDEN.code).send(FORBIDDEN.msg);
    }
  } catch (error) {
    res.status(SERVER_ERROR.code).send(error.message);
  }
};

module.exports = deleteComment;
