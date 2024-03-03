// views
let allPhoneViews = document.getElementById("all-phones-view");
let addView = document.getElementById("add-view");

// inputs
let idInput = document.querySelector('input[name="id"');
let brandInput = document.querySelector('input[name="brand"');
let nameInput = document.querySelector('input[name="name"');
let priceInput = document.querySelector('input[name="price"');
let availableInput = document.querySelector('select[name="available"');

// all phones tbody
const allPhonesTbody = allPhoneViews.querySelector("tbody");

// buttons
const allBtn = document.getElementById("allBtn");
const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");

// listeners
allBtn.addEventListener("click", displayAllPhonesView);
addBtn.addEventListener("click", displayAddView);
saveBtn.addEventListener("click", saveNewPhone);

// start app
createMainTable();

// functions
function displayAddView() {
  allPhoneViews.style.display = "none";
  addView.style.display = "block";
}

function displayAllPhonesView() {
  addView.style.display = "none";
  allPhoneViews.style.display = "block";
}

function saveNewPhone() {
  let newPhone = {
    id: idInput.value,
    brand: brandInput.value,
    name: nameInput.value,
    price: priceInput.value,
    available: checkAvailable(availableInput.value),
  };

  db.push(newPhone);
  createMainTable();
  displayAllPhonesView();
}

function checkAvailable(val) {
  // if (val === "true") {
  //   return true
  // } else {
  //   return false
  // }
  return val === "true" ? true : false;
}

function createMainTable() {
  let phonesHtml = "";

  // for (let i = 0; i < db.length; i++) {
  //   phonesHtml += `
  //       <tr>
  //         <td>${db[i].id}</td>
  //         <td>${db[i].brand}</td>
  //         <td>${db[i].name}</td>
  //         <td>${db[i].price}</td>
  //         <td>
  //           <button class="btn btn-sm btn-${
  //             db[i].available ? "success" : "danger"
  //           }">${db[i].available === true ? "Yes" : "No"}</button>
  //         </td>
  //     </tr>
  //     `.trim();
  // }

  db.map((phone) => {
    return (phonesHtml += `
      <tr>
        <td>${phone.id}</td>
        <td>${phone.brand}</td>
        <td>${phone.name}</td>
        <td>${phone.price}</td>
        <td>
          <button class="btn btn-sm btn-${
            phone.available ? "success" : "danger"
          }">${phone.available ? "Yes" : "No"}</button>
        </td>
    </tr>
  `.trim());
  });
  allPhonesTbody.innerHTML = phonesHtml;
}
console.log(db);
