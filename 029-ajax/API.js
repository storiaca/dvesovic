class API {
  constructor() {}

  getAll() {
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

let api = new API();
