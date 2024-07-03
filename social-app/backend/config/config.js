const PORT = 4000;
const SALT = 10;
const JWT_SECRET = "socialapp";
const JWT_OPTIONS = {
  algorithm: "HS256",
  expiresIn: "1d",
};
module.exports = { PORT, SALT, JWT_SECRET, JWT_OPTIONS };
