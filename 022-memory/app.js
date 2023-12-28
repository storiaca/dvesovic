let icons = [
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "Q",
  "W",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "Q",
  "W",
];
let container = document.querySelector(".container");


createGrid();
let allCards = document.querySelectorAll(".card");

allCards.forEach(card => card.addEventListener("click", flipCard))

function flipCard() {
  // let front = this.querySelector('.front');
  // let back = this.querySelector('.back');

  // front.style.transform = "perspective(900px) rotateY(180deg)";
  // back.style.transform = "perspective(900px) rotateY(0)";

  this.className = "card active"
}

function createGrid() {
  let cardsHtml = "";
  for (let i = 0; i < 36; i++) {
    let rand = Math.floor(Math.random() * icons.length)
    cardsHtml += `
        <div class="card">
            <div class="back">${icons[rand]}</div>
        	<div class="front"></div>
        </div>
      `.trim();
    icons.splice(rand, 1);
  }
  container.innerHTML = cardsHtml;
}
// 28:36
