const { SERVER_ERROR, UNAUTHORIZED } = require("../../config/statusCodes");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");
const UserModel = require("../../model/UserModel");
const activate = async (req, res, next) => {
  try {
    let { token } = req.body;
    jwt.verify(token, JWT_SECRET, async (error, decode) => {
      if (error) {
        res.status(UNAUTHORIZED.code).send("Your activation link is expired.");
      } else {
        let activated = await UserModel.updateOne(
          { _id: decode.id },
          { $set: { activate: true } }
        );
        res.send(activated);
      }
    });
  } catch (error) {
    res.status(SERVER_ERROR.code).send(error.message);
  }
};

module.exports = activate;
