// (function () {
//   return module.exports; // ovo uvek vraca po deafult-u koji je prazan objekat {}
// })();

// module.exports.car = "Skoda"

// const car = "Skoda";

// function info() {
//   console.log(car);
// }

// module.exports = info;

function display() {
  console.log("Display");
}

function info() {
  console.log("Info");
}

module.exports.info = info;
module.exports.display = display;
