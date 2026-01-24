const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

router.get("/", async (req, res) => {
  const msgs = await Message.find();
  res.json(msgs);
});

router.post("/", async (req, res) => {
  const msg = new Message(req.body);
  await msg.save();
  res.json(msg);
});

module.exports = router;