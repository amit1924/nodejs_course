import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1><a href='/about'>About</a> Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1><a href='/'>Home</a> About Page</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
  }
  console.log(req.url);
});

const port = 5000;
server.listen(port, () => {
  console.log("Server listening on port", port);
});
