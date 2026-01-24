const express = require("express");
const Help = require("../models/HelpRequest");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Help.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const help = new Help(req.body);
  await help.save();
  res.json(help);
});

module.exports = router;