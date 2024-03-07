// class Human {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let h = new Human("Aleksandar");

const rowDiv = document.getElementById("cards-row");

/** XMLHttpRequest */
let xml = new XMLHttpRequest();

xml.open("GET", "https://dummyjson.com/products");

xml.addEventListener("readystatechange", function () {
  if (xml.readyState === 4 && xml.status === 200) {
    displayProducts(JSON.parse(xml.responseText).products);
  }
});

xml.send();

function displayProducts(products) {
  console.log(products);
  let cardsHtml = "";

  products.forEach((product) => {
    return (cardsHtml += `
      <div class="col-4">
        <div class="card my-2">
          <div class="card-header">
            <h4>
              ${product.brand.substr(0, 10)}
              <span class="badge bg-primary float-end"> ${
                product.category
              }</span>
            </h4>
          </div>
          <div class="card-body">
            <img
              src='${product.thumbnail}'
              alt=""
              class="img-fluid"
              style="height: 200px"
            />
          </div>
          <div class="card-footer">
            <h5>
              ${product.title.substr(0, 10)}
              <span class="badge bg-warning float-end">${product.price}$</span>
            </h5>
          </div>
          <div class="card-footer">
            <button data-id="${
              product.id
            }" class="read-more btn btn-info form-control">Read more</button>
          </div>
        </div>
    </div>`.trim());
  });
  rowDiv.innerHTML = cardsHtml;

  const allReadMoreBtns = document.querySelectorAll(".read-more");
  allReadMoreBtns.forEach((btn) => btn.addEventListener("click", displayModal));
}

function displayModal() {
  const idProd = this.dataset.id;
  const modalBody = document.querySelector(".modal-body");
  const cardModal = new bootstrap.Modal(
    document.getElementById("exampleModal")
  );

  let xml = new XMLHttpRequest();

  xml.open("GET", `https://dummyjson.com/products/${idProd}`);

  xml.addEventListener("readystatechange", function () {
    if (xml.readyState === 4 && xml.status === 200) {
      console.log(JSON.parse(xml.responseText));
      let single = JSON.parse(xml.responseText);
      modalBody.innerHTML = single.title;
      cardModal.show();
    }
  });

  xml.send();
}

// setTimeout(() => {
//   console.log(JSON.parse(xml.responseText));
// }, 3000);

/** fetch() */
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((products) => console.log(products))
//   .catch((err) => console.log(err));

/** Promise */
// let obecanje = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Aleksandar i Promise");
//   }, 5000);
// });

// obecanje.then(function (val) {
//   console.log(val);
// });

// let prod = new Promise(function (resolve, reject) {
//   let xml = new XMLHttpRequest();

//   xml.open("GET", "https://dummyjson.com/products");

//   xml.addEventListener("readystatechange", function () {
//     if (xml.readyState === 4 && xml.status === 200) {
//       resolve(JSON.parse(xml.responseText).products);
//     }
//   });

//   xml.send();
// });

// prod.then(function (val) {
//   console.log(val);
// });

const prod = api.getAll();

prod.then(
  (val) => console.log(val),
  (err) => console.log(err)
);
