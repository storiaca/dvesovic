const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  deposit: Number,
  cCards: [String],
  createdAt: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
