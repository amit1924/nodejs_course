import { URL } from "url";

// Create a new URL object from a string
const myUrl = new URL("http://www.example.com:8080/login/h?password=abc#hash");

// Get different components of the URL
console.log("Protocol:", myUrl.protocol); // Output the protocol (e.g., "http:")

console.log("Hostname:", myUrl.hostname); // Output the hostname (e.g., "www.example.com")

console.log("Port:", myUrl.port); // Output the port (e.g., "8080")

console.log("Pathname:", myUrl.pathname); // Output the pathname (e.g., "/login/h")

console.log("Search Params:", myUrl.searchParams); // Output the search params object

console.log("Query:", myUrl.searchParams.get("password")); // Output the value of the "password" query parameter

console.log("Hash:", myUrl.hash); // Output the hash (e.g., "#hash")

console.log("href:", myUrl.href); // Output the full URL (e.g., "http://www.example.com:8080/login/h?password=abc#hash")