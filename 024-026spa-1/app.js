// views
let allPhoneViews = document.getElementById("all-phones-view");
let addView = document.getElementById("add-view");
let editDeleteView = document.getElementById("edit-delete-view");
let editFormView = document.getElementById("edit-phone-view");

// inputs
let idInput = document.querySelector('input[name="id"');
let brandInput = document.querySelector('input[name="brand"');
let nameInput = document.querySelector('input[name="name"');
let priceInput = document.querySelector('input[name="price"');
let availableInput = document.querySelector('select[name="available"');

// edit inputs
let eidInput = document.querySelector('input[name="eid"');
let ebrandInput = document.querySelector('input[name="ebrand"');
let enameInput = document.querySelector('input[name="ename"');
let epriceInput = document.querySelector('input[name="eprice"');
let eavailableInput = document.querySelector('select[name="eavailable"');

// all phones tbody
const allPhonesTbody = allPhoneViews.querySelector("tbody");
const editDeleteTbody = editDeleteView.querySelector("tbody");

// buttons
const allBtn = document.getElementById("allBtn");
const addBtn = document.getElementById("addBtn");
const editDeleteBtn = document.getElementById("ediDeletetBtn");
const saveBtn = document.getElementById("saveBtn");
const eSaveBtn = document.getElementById("esaveBtn");

// listeners
allBtn.addEventListener("click", displayAllPhonesView);
addBtn.addEventListener("click", displayAddView);
saveBtn.addEventListener("click", saveNewPhone);
editDeleteBtn.addEventListener("click", displayEditDelete);
eSaveBtn.addEventListener("click", updatePhone);

// helpers
let currentIndex = null;

// start app
createMainTable();

// functions
function displayAddView() {
  allPhoneViews.style.display = "none";
  editDeleteView.style.display = "none";
  editFormView.style.display = "none";
  addView.style.display = "block";
}

function displayAllPhonesView() {
  addView.style.display = "none";
  editDeleteView.style.display = "none";
  editFormView.style.display = "none";
  allPhoneViews.style.display = "block";
}

function displayEditDelete() {
  createEditTable();
  allPhoneViews.style.display = "none";
  addView.style.display = "none";
  editFormView.style.display = "none";
  editDeleteView.style.display = "block";
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
  idInput.value = "";
  brandInput.value = "";
  nameInput.value = "";
  priceInput.value = "";
  availableInput.value = true;
  createMainTable();
  displayAllPhonesView();
}

function deletePhone() {
  let index = this.dataset.index;
  let confirmDate = confirm(
    `Da li ste sigurni da zelite da obrisete ${db[index].name}`
  );

  if (!confirmDate) return;

  db.splice(index, 1);

  // createMainTable();
  // displayAllPhonesView();

  createEditTable();
  displayEditDelete();
}

function updatePhone() {
  let index = this.dataset.index;
  let updatedPhone = {
    id: eidInput.value,
    brand: ebrandInput.value,
    name: enameInput.value,
    price: epriceInput.value,
    available: checkAvailable(eavailableInput.value),
  };

  db[index] = updatedPhone;

  createMainTable();
  displayAllPhonesView();
}

function displayEditForm() {
  currentIndex = this.dataset.index;
  let currentPhone = db[currentIndex];
  eSaveBtn.setAttribute("data-index", currentIndex);

  eidInput.value = currentPhone.id;
  enameInput.value = currentPhone.name;
  ebrandInput.value = currentPhone.brand;
  epriceInput.value = currentPhone.price;
  eavailableInput.value = currentPhone.available;

  allPhoneViews.style.display = "none";
  editDeleteView.style.display = "none";
  addView.style.display = "none";
  editFormView.style.display = "block";
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
  let filtered = db.filter((phone) => phone.brand === "Samsung");
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

function createEditTable() {
  let phonesHtml = "";

  db.map((phone, index) => {
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
        <td>
          <button class="btn btn-sm btn-primary edit-btn" data-index="${index}">Edit</button>
          <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
        </td>
    </tr>
  `.trim());
  });
  editDeleteTbody.innerHTML = phonesHtml;

  let allDeleteBtns = editDeleteTbody.querySelectorAll(".delete-btn");
  let allEditBtns = editDeleteTbody.querySelectorAll(".edit-btn");

  allDeleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", deletePhone);
    allEditBtns[index].addEventListener("click", displayEditForm);
  });
}
