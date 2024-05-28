const fs = require("fs").promises;

const index = async (req, res) => {
  let id = req.params.account_id;
  const arrContent = await JSON.parse(fs.readFile("./data.json", "utf-8"));
  let currentAccount = arrContent.find((acc) => acc.id == id);
  res.render("profile", { currentAccount, accounts: arrContent });
};

const deleteProfile = async (req, res) => {
  let id = req.params.account_id;
  // console.log(req.params.id);
  // res.send("Ok");
};

module.exports = { index, deleteProfile };
