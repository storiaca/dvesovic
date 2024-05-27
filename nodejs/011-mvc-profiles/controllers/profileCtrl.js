const fs = require("fs").promises;

const index = async (req, res) => {
  let id = req.params.account_id;
  fs.readFile("./data.json", "utf-8", (err, content) => {
    let arrContent = JSON.parse(content);
    let currentAccount = arrContent.find((acc) => acc.id == id);
    res.render("profile", { currentAccount, accounts: arrContent });
  });
};

const deleteProfile = (req, res) => {
  console.log(req.params.id);
  res.send("Ok");
};

module.exports = { index, deleteProfile };
