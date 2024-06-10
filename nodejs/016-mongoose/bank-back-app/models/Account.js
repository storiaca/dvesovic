const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    lovercase: true,
    // validate: {
    //   validator: function (v) {
    //     return v.length > 2;
    //   },
    //   message: (props) => `${props.value} is not valid first name!`,
    // },
  },
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
