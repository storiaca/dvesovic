const fs = require("fs");

const index = (req, res) => {
  let id = req.params.account_id;
  fs.readFile("./data.json", "utf-8", (err, content) => {
    let arrContent = JSON.parse(content);
    let currentAccount = arrContent.find((acc) => acc.id == id);
    res.render("profile", { currentAccount, accounts: arrContent });
  });
};

const deleteProfile = (req, res) => {};

module.exports = { index, deleteProfile };
