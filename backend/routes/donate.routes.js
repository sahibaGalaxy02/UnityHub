const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ msg: "Donation received", amount: req.body.amount });
});

module.exports = router;