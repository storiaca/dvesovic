const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

router.get("/", async (req, res) => {
  const accounts = await Account.find();
});

router.get("/accounts", async (req, res) => {
  const accounts = await Account.find();
  res.json({ msg: "Podaci stigli", accounts });
});

router.post("/accounts", async (req, res) => {
  try {
    if (req.body.firstName === "") {
      console.log("Nesto", req.body);
      res.json({ msg: "First Name is requred" });
    } else {
      const account = new Account({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        deposit: req.body.deposit,
        cCards: req.body.cCards,
      });
      await account.save();
      res.send(account);
    }
  } catch (error) {
    res.json({ err: error.message });
  }
});

router.delete("/accounts/:id", async (req, res) => {
  const deleted = await Account.findByIdAndDelete(req.params.id);
  res.send(deleted);
});

router.patch("/accounts/:id", async (req, res) => {
  const updated = await Account.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(updated);
});

module.exports = router;
