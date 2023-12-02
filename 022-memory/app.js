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
console.log(icons.length);
createGrid();

function createGrid() {
  let cardsHtml = "";
  for (let i = 0; i < 36; i++) {
    cardsHtml += `
        <div class="card">
            <div class="back">${icons[i]}</div>
        	<div class="front"></div>
        </div>
      `.trim();
  }
  container.innerHTML = cardsHtml;
}
// 28:36
