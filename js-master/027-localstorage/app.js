// localStorage.car = "Skoda";

// if (localStorage.color) {
//   console.log(localStorage.color);
// }

// let xxx = [
//   {
//     id: 1,
//     name: "Aleksandar ",
//   },
// ];

// localStorage.mojabaza = JSON.stringify(xxx);

let xxx = {
  name: "Aleksandar",
};

let xxxJson = JSON.stringify(xxx);

localStorage.xxx = xxxJson;

let toNative = JSON.parse(xxxJson);

console.log(xxxJson, toNative);
