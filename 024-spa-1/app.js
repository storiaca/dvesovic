// views
let allPhoneViews = document.getElementById("all-phones-view");

// all phones tbody
const allPhonesTbody = allPhoneViews.querySelector("tbody");

// start app
createMainTable();

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
