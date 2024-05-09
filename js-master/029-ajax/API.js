class API {
  // constructor() {}

  static getAll() {
    return new Promise(function (resolve, reject) {
      let xml = new XMLHttpRequest();

      xml.open("GET", "https://dummyjson.com/products");

      xml.addEventListener("readystatechange", function () {
        if (xml.readyState === 4 && xml.status === 200) {
          resolve(JSON.parse(xml.responseText).products);
        } else if (xml.readyState === 4 && xml.status === 404) {
          reject("Nema takvog fajla");
        }
      });

      xml.send();
    });
  }
}

// let api = new API();

class Human {
  static car = "Volvo";
  name;
  static counter = 0;
  constructor(name) {
    Human.counter++;
    this.name = name;
  }
}

let h1 = new Human("Aleksandar");
let h2 = new Human("Milan");
let h3 = new Human("Nikola");

console.log(h1.car); // undefined
console.log(Human.car); // Volvo

console.log(Human.counter); // 3

class ConnectDB {
  static con = "hhtp://mydb.com";
}
