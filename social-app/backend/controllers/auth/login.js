const UserModel = require("../../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
  console.log(req.body);
  try {
    let { email, password } = req.body;
    const foundUser = await UserModel.findOne({ email });
    if (foundUser) {
      let checkPassword = await bcrypt.compare(password, foundUser.password);

      if (checkPassword) {
        let payload = {
          id: foundUser._id,
          role: foundUser.role,
        };

        let token = jwt.sign(payload, JWT_SECRET, {
          algorithm: "HS256",
          expiresIn: "1d",
        });

        res.send({ user: foundUser, token });
        //res.send("User is logged.");
      } else {
        res.status(201).send("Password is wrong!");
      }
    } else {
      res.status(201).send("User with this e-mail not exist");
    }
  } catch (error) {
    //console.log(error);
    res.status(415).send({ msg: error.message });
  }
};

module.exports = login;
