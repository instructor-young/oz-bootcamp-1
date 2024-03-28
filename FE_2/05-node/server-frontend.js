const http = require("http");

// 1. 만든다
const server = http.createServer((req, res) => {
  res.write(`
    <html>
      <head>
        <title>노드로 서버 만들어 보기</title>
      </head>
      <body>
        <h1 style="color: red;">
          My First Node Server
        </h1>
      </body>
    </html>
  `);
  res.end();
});

// 2. 듣는다
server.listen(5555, () => {
  console.log("서버가 잘 작동을 시작했습니다...");
});
