// (function () {
//   console.log("Hello");
// })();

// (function () {})(exports, require, module, __filename, __dirname);

// console.log(arguments);

// console.log(__filename); // /home/stori/js/dvesovic/nodejs/003-modules/node-1/app.js

// const info = require("./utils");

// console.log(info());

// const utils = require("./utils");
// utils.display();
// utils.info();

// const { display, info } = require("./utils");

// info();
// display();

const jobFilter = require("./filter");
const users = require("./users.json");

//console.log(users);
const gamers = jobFilter(users, "gamer");
console.log(gamers);
