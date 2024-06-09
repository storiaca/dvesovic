const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountsSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    // lovercase: true,
    // validate: {
    //   validator: function (v) {
    //     return v.length > 2;
    //   },
    //   message: (props) => `${props.value} is not valid first name!`,
    // },
  },
  lastName: String,
  deposit: Number,
  cCards: [String],
  createdAt: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
});

const Account = mongoose.model("Account", AccountsSchema);

module.exports = Account;
