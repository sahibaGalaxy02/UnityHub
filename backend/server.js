require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/help", require("./routes/help.routes"));
app.use("/api/donate", require("./routes/donate.routes"));
app.use("/api/chat", require("./routes/chat.routes"));

app.listen(process.env.PORT, () => {
  console.log("Backend running on port", process.env.PORT);
});