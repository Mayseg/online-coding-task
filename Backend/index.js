const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const blocks = require("./blocks.json");

app.get("/", (req, res) => {
  res.send("We running girrrrrr" + blocks);
});

app.get("/code-blocks", (req, res) => {
  //fetch code blocks from db
  res.json(blocks);
});

//handle code changes
io.on("code-change", data => {
  io.broadcast.emit("code-changed", data);
});

// handle connection
io.on("connection", socket => {
  console.log("a user connected");
});

//handle disconnect
io.on("disconnect", socket => {
  console.log("a user disconnected");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
