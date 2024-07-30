const PORT = 4000;
const SALT = 10;
const JWT_SECRET = "socialapp";
const JWT_OPTIONS = {
  algorithm: "HS256",
  expiresIn: "1d",
};

const JWT_OPTIONS_ACTIVATE = {
  algorithm: "HS256",
  expiresIn: "1d",
};

const SERVICE_MAIL = "fsdev1234@gmail.com";
const MAIL_CONFIG = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: SERVICE_MAIL,
    pass: "mspmqburtudlrerz",
  },
};
module.exports = {
  PORT,
  SALT,
  JWT_SECRET,
  JWT_OPTIONS,
  MAIL_CONFIG,
  SERVICE_MAIL,
  JWT_OPTIONS_ACTIVATE,
};
