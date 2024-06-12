const tBody = document.getElementById("tBody");
const btnShowForm = document.getElementById("btnShowForm");
const showForm = document.getElementById("showForm");
const formAddUser = document.getElementById("formAddUser");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const deposit = document.getElementById("deposit");
const cCards = document.getElementById("cCards");
const formUpload = document.getElementById("formUpload");
const imagesDiv = document.querySelector(".images");

window.addEventListener("DOMContentLoaded", async (event) => {
  const res = await fetch("api/v1/accounts");
  const res1 = await fetch("api/v1/upload");
  data = await res.json();
  resImg = await res1.json();
  renderImages(resImg.images);
  renderData(data);
});

function renderImages(i) {
  let html = "";

  i.forEach((image) => {
    html += `
       <img width="200px" src="${image.imageUrl}" alt="${image.imageName}">
    `;
  });
  imagesDiv.innerHTML = html;
}

function renderData(data) {
  let html = "";
  data.accounts.forEach((account) => {
    html += `<tr>
      <td>
          ${account.firstName} ${account.lastName}
      </td>
      <td>
          ${account.email}
      </td>
      <td>
          ${account.deposit}
      </td>
      <td>
          ${account.cCards}
      </td>
      <td>
          <button id="${account._id}" onclick="deleteUser(this.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>`.trim();
  });
  tBody.innerHTML = html;
}

async function deleteUser(id) {
  const deleteUser = await fetch(`api/v1/accounts/${id}`, {
    method: "DELETE",
  });

  const resUser = await deleteUser.json();
  location.reload();
}

btnShowForm.addEventListener("click", () => {
  showForm.classList.toggle("active");
});

formAddUser.addEventListener("submit", async (e) => {
  e.preventDefault();
  const account = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    deposit: deposit.value,
    cCards: cCards.value.split(","),
  };

  const resData = await fetch("api/v1/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(account),
  });

  const userData = await resData.json();
  console.log(userData);

  showForm.classList.remove("active");
  formAddUser.reset();
});

formUpload.addEventListener("submit", handleFileUpload);

async function handleFileUpload(e) {
  e.preventDefault();
  const fileName = document.getElementById("fileName").value;
  const browseFile = document.getElementById("browseFile").files[0];
  try {
    const fileData = new FormData();
    fileData.append("name", fileName);
    fileData.append("file", browseFile);

    const dataResponse = await fetch("api/v1/upload", {
      method: "POST",
      body: fileData,
    });
    const response = await dataResponse.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Klasa za url
 */
// class FetchMethods{
//   constructor(url){
//       this.url = url
//   }
//   async getAccounts(url){
//       try {
//           const response = await fetch(`${this.url}`);
//           return await response.json();
//       } catch (error) {
//           console.log(error);
//           throw error;
//       }
//   }
// }
