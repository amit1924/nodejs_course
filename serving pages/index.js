import http from "http";
import fs from "fs";

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check if the request URL is "/"
  if (req.url === "/") {
    // Set response headers
    res.writeHead(200, { "Content-Type": "text/html" });

    // Read the home.html file asynchronously
    fs.readFile("./public/home.html", (err, data) => {
      // If an error occurs while reading the file
      if (err) {
        // Send a 404 Not Found response
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
      } else {
        // Send the contents of the file as the response
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    // If the request URL is "/about"
    res.writeHead(200, { "Content-Type": "text/html" });

    // Read the about.html file asynchronously
    fs.readFile("./public/about.html", (err, data) => {
      // If an error occurs while reading the file
      if (err) {
        // Send a 404 Not Found response
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
      } else {
        // Send the contents of the file as the response
        res.end(data);
      }
    });
  } else {
    // If the request URL is neither "/" nor "/about"
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

// Start the server and make it listen on port 5000
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
