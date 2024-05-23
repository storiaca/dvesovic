let subBtn = document.querySelector("#sub");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#msg");
let allMessages = document.querySelector("#all-messages");

let latestMessages = [];
let html = ``;

subBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // fetch("/messages", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email: emailInput.value,
  //     message: messageInput.value,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((msg) => {
  //     latestMessages = msg.data;
  //     if (latestMessages.length > 1) {
  //       latestMessages.forEach((latest) => {
  //         const formattedDate = new Date(latest.date).toLocaleDateString(
  //           "en-US",
  //           {
  //             year: "numeric",
  //             month: "short",
  //             day: "numeric",
  //             hour: "2-digit",
  //             minute: "2-digit",
  //           }
  //         );
  //         allMessages.innerHTML += `
  //         <dl>
  //           <dt>${latest.email}</dt>
  //           <dd>${latest.message}</dd>
  //           <dt>${formattedDate}</dt>
  //         </dl>
  //         `;
  //       });
  //     }
  //   })
  //   .catch((err) => console.log(err));

  let xml = new XMLHttpRequest();

  emailInput.value = "";
  messageInput.value = "";
});
