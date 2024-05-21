let card = require("./card");
let users = require("./users.json");

function makeCards() {
  let text = ``;
  users.forEach((user) => {
    text += card.replace("{{name}}", user.name).replace("{{info}}", user.info);
  });

  return text;
}

module.exports = makeCards;
