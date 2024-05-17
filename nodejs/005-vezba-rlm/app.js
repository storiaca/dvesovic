const pitanja = require("./pitanja");
const os = require("os");
const fs = require("fs");
const readline = require("readline");
const { stdin, stdout } = require("process");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let ime = null;
let pitanjeIndex = 0;

rl.setPrompt("Unesite Vase ime? ");

rl.on("line", (line) => {
  ime = line;
  startTest();
});
rl.prompt();

function startTest() {
  rl.question(pitanja[pitanjeIndex].text, (answer) => {
    pitanja[pitanjeIndex].userAnswer = answer;

    if (pitanjeIndex < pitanja.length - 1) {
      pitanjeIndex++;
      startTest();
    } else {
      console.log("Uspesno ste odgovorili na pitanja.");
      rl.close();
      upisivanjeRezultata();
    }
  });
}

function upisivanjeRezultata() {
  fs.writeFileSync(ime + ".json", JSON.stringify(pitanja));
}

// const home = os.homedir();
// fs.writeFileSync(`${home}/Desktop/hello.txt`, "Hello Node");
//console.log(os);
