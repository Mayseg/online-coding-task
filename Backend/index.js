const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIO = require("socket.io");
const codeBlockRouts = require("./codeBlockRouts");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(codeBlockRouts);

//handle code changes
io.on("code-change", data => {
  io.broadcast.emit("code-changed", data);
});

// handle connection
io.on("connection", socket => {
  console.log("a user connected");

  socket.on("code-change", data => {
    socket.broadcast.emit("code-changed", data);
  });
  socket.on("disconnect", socket => {
    console.log("a user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
