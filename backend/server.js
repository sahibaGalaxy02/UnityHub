const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET", "POST"]
}));

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (data) => {
    console.log("Message received:", data);
    
    socket.emit("receive_message", {
      sender: "UnityHub Bot",
      message: "Thanks for your message! A volunteer will respond soon ❤️"
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
