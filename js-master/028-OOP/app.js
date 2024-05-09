/* FACTORY PATTERN */
// function createObject(name, age) {
//   let xxx = {};
//   xxx.name = name;
//   xxx.age = age;

//   return xxx;
// }

// let p1 = createObject("Aleksandar", 42);
// let p2 = createObject("Stefan", 35);

// console.log(p1, p2);

// console.log(p1 instanceof createObject); // false

/** CONSTRUCTOR PATTERN */

// function CreateObject(name, age) {
//   this.name = name;
//   this.age = age;
//   this.info = function () {
//     console.log(this.name + " " + this.age);
//   };
// }

// const p1 = new CreateObject("Filip", 24);
// const p2 = new CreateObject("Marko", 34);

// console.log(p1, p2);

// console.log(p1 instanceof CreateObject); // true

// p1.info();

// console.log([1, 2, 3] instanceof Array); // true

// function Human(name) {
//   this.name = name;
//   // this.info = function () {
//   //   console.log(this.name);
//   // };
// }
// Human.prototype.info = function () {
//   console.log(this.name);
// };

// let h1 = new Human("Danilo");

// h1.info();

// let allHumans = [];

// for (let i = 0; i < 1000; i++) {
//   allHumans.push(new Human(`Pero ${i}`));
// }
// allHumans[256].info();

let container = document.querySelector(".container");
let info = document.querySelector(".info");

function Soldier(name) {
  this.name = name;
  this.weapon = ["gun", "riffle", "sniper"][Math.floor(Math.random() * 3)];
}

let allSoldiers = [];

createArmy(1000);

function createArmy(num) {
  for (let i = 0; i < num; i++) {
    allSoldiers.push(new Soldier("Filip " + i));
  }
}

displaySoldiers();

function displaySoldiers() {
  allSoldiers.forEach((soldier, index) => {
    let soldierDiv = document.createElement("div");
    soldierDiv.id = index;
    soldierDiv.addEventListener("click", displayInfo);
    if (soldier.weapon === "sniper") {
      soldierDiv.className = "soldier sniper";
    } else {
      soldierDiv.className = "soldier";
    }
    //soldierDiv.innerText = soldier.name;
    container.appendChild(soldierDiv);
  });
}

function displayInfo() {
  let currenSoldier = allSoldiers[this.id];
  let html = "";
  html += `<p>${currenSoldier.name}</p>`;
  html += `<p>${currenSoldier.weapon}</p>`;
  info.innerHTML = html;
}
