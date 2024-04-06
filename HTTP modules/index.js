import http from "http";

// Create Server
const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end("Hello, worlds!");
  //   res.statusCode = 400;
  //   res.statusMessage = "Bad Request";
  //   res.end("Hello, world!");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});

server.on("error", (error) => {
  console.error("Server error:", error);
});
