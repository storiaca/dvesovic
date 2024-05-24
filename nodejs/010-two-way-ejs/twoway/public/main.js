let subBtn = document.querySelector("#sub");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#msg");
let allMessages = document.querySelector("#all-messages");

let latestMessages = [];
let html = ``;

window.addEventListener("load", () => {
  fetch("/messages")
    .then((res) => res.json())
    .then((data) => showData(data.data));
});

subBtn.addEventListener("click", function (e) {
  e.preventDefault();

  fetch("/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      message: messageInput.value,
    }),
  })
    .then((res) => res.json())
    .then((msg) => {
      showData(msg.data);
    })
    .catch((err) => console.log(err));

  let xml = new XMLHttpRequest();
  xml.open("POST", "/messages");
  xml.setRequestHeader("Content-Type", "application/json");
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      console.log(xml.responseText);
    }
  };

  xml.send(
    JSON.stringify({
      email: emailInput.value,
      message: messageInput.value,
    })
  );

  emailInput.value = "";
  messageInput.value = "";
});

function showData(messages) {
  if (messages.length > 1) {
    html = "";
    messages.forEach((latest) => {
      const formattedDate = new Date(latest.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      html += `
        <dl>
          <dt>${latest.email}</dt>
          <dd>${latest.message}</dd>
          <dt>${formattedDate}</dt>
        </dl>
        `;
    });
    allMessages.innerHTML = html;
  }
}
