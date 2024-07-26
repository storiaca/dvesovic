const UserModel = require("../../model/UserModel");
const joinUserToMembers = require("../../joins/joinUserToMembers");

const getAllMembers = async (req, res, next) => {
  try {
    const members = await UserModel.aggregate([
      { $limit: 12 },
      ...joinUserToMembers,
    ]);
    console.log(members);
    res.send(members);
  } catch (error) {
    console.log(error);
    res.status(415).send(error.message);
  }
};

module.exports = getAllMembers;
