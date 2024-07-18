const { SERVER_ERROR } = require("../../config/statusCodes");
const TagModel = require("../../model/TagModel.js");
const getAll = async (req, res, next) => {
  try {
    let tags = await TagModel.find().sort({ name: 1 });
    res.send(tags);
  } catch (error) {
    res.status(SERVER_ERROR.code).send(error.message);
  }
};

module.exports = getAll;
