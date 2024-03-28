const http = require("http");
const posts = require("./posts.json");
// const users = require("./users.json");

const users = [];

// 1. 만든다
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  // Health-check
  if (req.url === "/") {
    res.write("OK");
  } else if (req.url === "/posts") {
    res.write(JSON.stringify(posts));
  } else if (req.url === "/users") {
    res.write(JSON.stringify(users));
  } else if (/\/users\/\d+/.test(req.url)) {
    const userId = Number(req.url.split("/users/")[1]);
    const user = users.find((user) => user.id === userId);

    res.write(JSON.stringify(user));
  }

  res.end();
});

// 2. 듣는다
server.listen(5555, () => {
  console.log("서버가 잘 작동을 시작했습니다...");
});
