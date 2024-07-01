const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const UserModel = require("../model/UserModel");
const verifyToken = async (req, res, next) => {
  // da li postoji token?
  // 1. proveriti da li postoji token u request-u
  if (req.headers.hasOwnProperty("authorization")) {
    // 2. proveriti da li je token validan i da li je istekao
    let token = req.headers.authorization;
    jwt.verify(token, JWT_SECRET, async (error, decode) => {
      if (error) {
        res.status(401).send({ msg: "Token is expired" });
      } else {
        // 3. proveriti da li id usera iz tokena postoji u bazi
        let checkUser = await UserModel.findOne({ _id: decode.id });
        if (checkUser) {
          req.locals = {
            _id: decode.id,
            role: decode.role,
          };
          next();
        } else {
          res.status(401).send({ msg: "Invalid token" });
        }
      }
    });
  } else {
    res.status(401).send({ msg: "You must have authorization!" });
  }
  res.send("ok");
};

module.exports = verifyToken;
