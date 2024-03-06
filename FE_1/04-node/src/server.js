const http = require("http");

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
  } else if (url === "/cool") {
    res.write("Cool~");
  } else if (url === "/bad") {
    res.write("Bad~");
  } else if (url === "/posts") {
    res.write('{ "title": "wow", "content": "cool~" }');
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
