const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": " text/html; charset=UTF-8 " }),
      res.end(`<h1>Welcome Home Page</h1>  <a href="/about">About</a>`);
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": " text/html; charset=UTF-8 ",
    });
    res.end(`<h1>About</h1> <a href="/">Home Page</a> `);
  } else {
    res.writeHead(400, { "Content-Type": " text/html; charset=UTF-8 " });
    res.end("<h1>Страница не найдена</h1>");
  }
});

server.listen(port, () => {
  console.log(`Сервер запушен по порту ${port}`);
});
