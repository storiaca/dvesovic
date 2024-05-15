// var car = "Skoda";

// class Human {
//     constructor(){
//         this.name = 'Aleksandar'
//     }
// }

// let h1 = new Human()

/* prvi stepen enkapsulacije */
// window.APP = {};

// APP.car = "Skoda";

// APP.Human = function () {

// }

/* treci stepen enkapsulacije */
// (function (jQuery) {
//   const car = "Skoda";
//   function Human() {
//     console.log(car);
//   }
//   return Human;
// })(jQuery);

// let h1 = new Human();

/* cetvrti stepen enkapsulacije */
// import { info } from "./data.js";

// console.log(info());

function info() {
  console.log(arguments); // arguments je niz
}

info("Danilo", "Ana");
