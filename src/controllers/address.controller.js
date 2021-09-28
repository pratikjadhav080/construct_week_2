const express = require("express");
const router = express.Router();

const Addresses = require("../models/address.model");

//get all the address details
router.get("", async (req, res) => {
  let address = await Addresses.find().lean().exec();
  res.send({ address });
});

// post user address
router.post("", async (req, res) => {
  let createdAddress = await User.create(req.body);
  res.send({ createdAddress });
});

module.exports = router;