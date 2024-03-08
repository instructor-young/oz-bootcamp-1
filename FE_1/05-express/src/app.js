// 1. 만든다
const bodyParser = require("body-parser");
const express = require("express");
const server = express();

let users = [];

server.use(bodyParser.json());

server.get("/", (_, res) => {
  res.send("Root~");
});

server.post("/sign-up", (req, res) => {
  users.push(req.body);

  res.send(201);
});

server.delete("/withdraw", (req, res) => {
  const userIdToDelete = req.body.id;
  users = users.filter((user) => user.id !== userIdToDelete);

  res.send(204);
});

server.get("/users", (req, res) => {
  res.json(users);
});

// 2. 듣는다.
server.listen(3388, () => {
  console.log("Server started to listen port number 3388...");
});
