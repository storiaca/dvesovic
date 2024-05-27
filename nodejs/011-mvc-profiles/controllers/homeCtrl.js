const fs = require("fs").promises;

const homeCtrl = async (req, res) => {
  let content;
  try {
    content = await fs.readFile("./data.json", "utf-8");
    console.log("Stigao kontent"); // ovo se prvo izvsava u funkciji
  } catch (error) {
    console.log(error);
    res.redirect("./404");
  }

  console.log("Danilo"); // prvo se drugo izvrsava u funkciji

  //await fs.writeFile("./new_data", content);
  res.render("index", { accounts: JSON.parse(content) });
};

console.log("Danilo 2"); // ovo se izvrsava prvo pre svega, zato sto je ona funkcija asyn/await

module.exports = homeCtrl;
