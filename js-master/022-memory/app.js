// ovo je bitna variabla
let level = 1;

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

let wins = 0;

let twoFlipped = [];
let container = document.querySelector(".container");

createGrid();
let allCards = document.querySelectorAll(".card");

allCards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  this.removeEventListener("click", flipCard);
  // let front = this.querySelector('.front');
  // let back = this.querySelector('.back');

  // front.style.transform = "perspective(900px) rotateY(180deg)";
  // back.style.transform = "perspective(900px) rotateY(0)";
  twoFlipped.push(this);

  this.classList.add("active");

  if (twoFlipped.length === 2) {
    checkCards();
  }
}

function createGrid() {
  let cardsHtml = "";
  for (let i = 0; i < 36; i++) {
    let rand = Math.floor(Math.random() * icons.length);
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

function checkCards() {
  removeAllClicks();
  let back1 = twoFlipped[0].querySelector(".back");
  let back2 = twoFlipped[1].querySelector(".back");
  console.log(back1.innerHTML, back2.innerHTML);
  if (back1.innerHTML === back2.innerHTML) {
    // pogodak
    wins++;
    if (wins === 18) {
      // NEXT LEVEL Level2()
      level++;
      game();
    }
    twoFlipped = [];
    returnClicks();
  } else {
    setTimeout(() => {
      twoFlipped[0].classList.remove("active");
      twoFlipped[1].classList.remove("active");
      twoFlipped.length = 0;
      returnClicks();
    }, 700);
  }
}

function removeAllClicks() {
  allCards.forEach((card) => card.removeEventListener("click", flipCard));
}

function returnClicks() {
  // allCards.forEach((card) => {
  //   if (!card.classList.contains("active")) {
  //     card.addEventListener("click", flipCard);
  //   }
  // });

  let cardsNoActive = document.querySelectorAll(".card:not(.active)");
  cardsNoActive.forEach((card) => card.addEventListener("click", flipCard));
}
//
