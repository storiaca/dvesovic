const { SERVER_ERROR, DB_ERROR } = require("../../config/statusCodes");
const CommentModel = require("../../model/CommentModel");
const addComment = async (req, res, next) => {
  try {
    let user = {
      id: req.locals._id,
      ...req.locals,
    };
    let newComment = new CommentModel({ ...req.body, user });
    let saveComment = await newComment.save();
    if (saveComment) {
      res.send(saveComment);
    }
  } catch (error) {
    res.status(SERVER_ERROR.code).send(error.message);
  }
};

module.exports = addComment;
