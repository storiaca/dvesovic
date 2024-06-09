const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/mihajlodb")
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch((err) => console.log("Could not connect to MongoDB", err));

mongoose.connect("mongodb://localhost:27017/mihajlodb");

const Account = require("./models/Account");

async function dbConn() {
  await Account.create({
    firstName: "Marko",
    lastName: "Tomic",
    deposit: 2700,
    cCards: ["Visa", "MasterCard"],
  });
  // const acc = new Account({
  //   firstName: "Milan",
  //   lastName: "Panic",
  //   deposit: 2700,
  //   cCards: ["Visa", "MasterCard"],
  // });

  // await acc.save(); // STOP, dok ne dodje resolve

  process.exit(0);
}

dbConn();
