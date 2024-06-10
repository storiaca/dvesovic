const tBody = document.getElementById("tBody");
const btnShowForm = document.getElementById("btnShowForm");
const showForm = document.getElementById("showForm");
const formAddUser = document.getElementById("formAddUser");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const deposit = document.getElementById("deposit");
const cCards = document.getElementById("cCards");

window.addEventListener("DOMContentLoaded", async (event) => {
  const res = await fetch("api/v1/accounts");
  data = await res.json();
  renderData(data);
});

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

// function reqListener() {
//   console.log(this.responseText);
// }

// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("POST", "http://localhost:8080/api/v1/accounts", {
//   "Content-Type": "application/json",
//   body: {},
// });
// req.send();

// xmlhttp.onreadystatechange = function () {
//   if (xmlhttp.readyState !== 4) return;
//   if (xmlhttp.status === 200) {
//     console.log("Request Response", xmlhttp.responseText);
//   } else {
//     console.log("HTTP error", xmlhttp.status, xmlhttp.statusText);
//   }
// };
