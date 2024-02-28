const titleStart = document.getElementById("start");
const player1Dice = document.querySelector(".player1-dice");
const player2Dice = document.querySelector(".player2-dice");

titleStart.addEventListener("click", startGame);

function startGame() {
  titleStart.removeEventListener("click", startGame);
  let counter = 5;
  const counterId = setInterval(() => {
    titleStart.innerHTML = counter;
    counter--;
    if (counter === 0) {
      clearInterval(counterId);
      titleStart.innerHTML = "Player 1 turn";
    }
  }, 1000);
}

console.log(player1Dice, player2Dice);
//
