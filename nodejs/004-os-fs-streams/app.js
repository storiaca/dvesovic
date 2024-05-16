/* === info cpu === */
// const os = require("os");

// console.log(os.cpus());

/* === screen resolution === */
// const os = require("os");
// let max = os.cpus().reduce((num, cpu) => num + cpu.speed, 0);
// let rez = max > 50000 ? "4K" : "FHD";

// console.log(rez);

/* === fs module === */
// const fs = require("fs");
//fs.writeFileSync("data.txt", "Zdravo Node JS");

// const fajl = fs.readFileSync("data.txt", "utf-8");
// console.log(fajl);

//const index = fs.readFileSync(__dirname + "/index.html", "utf-8");
// fs.readFile("./data.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("Ovo je PRVO");

/* === readline module === */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Vase ime? ", (input) => {
  console.log(input);
  // process.exit();
  rl.close();
});

// rl.on("close", () => {
//   console.log("Uspesno smo uzeli vase podatke!");
// });

rl.addListener("close", () => {
  console.log("Uspesno smo uzeli vase podatke!");
});
