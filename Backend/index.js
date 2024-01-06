const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");
const codeBlockRouts = require("./codeBlockRouts");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());

app.use(codeBlockRouts);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
