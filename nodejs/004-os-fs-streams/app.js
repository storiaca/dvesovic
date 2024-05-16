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

// const test = require("./test.js");
// const readline = require("readline");
// const os = require("os");
// const fs = require("fs");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let fileName = null;
// let questionIndex = 0;

// rl.question("Vase ime? ", (input) => {
//   //console.log(input);
//   // process.exit();
//   fileName = input;
//   startTest();
// });

// // rl.on("close", () => {
// //   console.log("Uspesno smo uzeli vase podatke!");
// // });

// rl.addListener("close", () => {
//   console.log("Uspesno smo uzeli vase podatke!");
//   fs.writeFileSync(fileName + ".txt", JSON.stringify(test));
// });

// function startTest() {
//   rl.question(test[questionIndex].text, (input) => {
//     test[questionIndex].userAnswer = input;
//     questionIndex++;

//     if (questionIndex === test.length) {
//       rl.close();
//     } else {
//       startTest();
//     }
//   });
// }

// fs.writeFileSync(`${os.homedir}/Desktop/users.json`, "Hello");

/* === citanje fajlova === */
const fs = require("fs");

// fs.readFile("index.html", "utf-8", (err, data) => {
//   fs.writeFile("./index2.html", data, "utf-8", (err, data) => {
//     console.log("Fajl kopiran");
//   });
// });

const rs = fs.createReadStream(__dirname + "/index.html");
const wr = fs.createWriteStream(__dirname + "/novi.html");

// rs.on("data", (data) => {
//   wr.write(data);
// });
rs.pipe(wr);

rs.on("end", () => {
  console.log("Strimovanje gotovo");
});
