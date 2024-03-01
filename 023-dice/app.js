let totalScore = 0;

const titleStart = document.getElementById("start");
const kockica1 = document.querySelector(".asd1");
const kockica2 = document.querySelector(".asd2");

const par = document.querySelectorAll(".score p");

kockica1.addEventListener("click", game);
//kockica2.addEventListener("click", game);

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

function game() {
  if (kockica1.className === "kockice asd1") {
    let res = Math.ceil(Math.random() * 6);
    let handScore = res;

    totalScore += handScore;

    par[0].innerHTML = "Hand score " + handScore;
    par[1].innerHTML = "Total score " + totalScore;
    kockica1.removeEventListener("click", game);
    kockica1.classList.remove("asd1");
    kockica2.addEventListener("click", game);
  } else {
    let res = Math.ceil(Math.random() * 6);
    let handScore = res;

    totalScore += handScore;

    par[2].innerHTML = "Hand score " + handScore;
    par[3].innerHTML = "Total score " + totalScore;
    kockica2.removeEventListener("click", game);
    kockica1.addEventListener("click", game);
    kockica1.classList.add("asd1");
  }
}
console.log(par);
//
