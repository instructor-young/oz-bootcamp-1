const http = require("http");

// 1. 만든다
const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

// 2. 듣는다
server.listen(5555, () => {
  console.log("서버가 잘 작동을 시작했습니다...");
});
