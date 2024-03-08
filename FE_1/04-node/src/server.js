const http = require("http");
const path = require("path");

// 1. 만든다.(create)
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    const name = "Young";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <html>
        <head>
          <title>Cool~</title>
        </head>

        <body>
          <h1>${name} is so cool~</h1>
        </body>
      </html>
    `);
  } else if (url === "/posts" && req.method === "GET") {
    res.write('{ "title": "wow", "content": "cool~" }');
  } else if (url === "/posts" && req.method === "POST") {
    // 포스트 생성하는 작업~
  } else {
    res.writeHead(404);
    res.write("Not Found");
  }

  res.end();
});

// 2. 듣는다.(listen)
server.listen(7777, () => {
  console.log("서버...작동...시작...이제...듣고...있음...");
});

// path    HTTP Methods
// ---------------
// /posts  GET   -> 전체 포스트 돌려주기
// /posts  POST  -> 포스트 하나를 생성해 주는 거고
