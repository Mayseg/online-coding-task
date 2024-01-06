const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIO = require("socket.io");
const codeBlockRouts = require("./codeBlockRouts");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect(
  "mongodb+srv://MayDev:MayDev86@cluster0.w2efy7d.mongodb.net/blocks?retryWrites=true&w=majority"
);

app.use(express.json());
app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
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
