import { URL } from "url";

const myUrl = new URL("http://www.example.com:8080/login/h?password=abc#hash");

// Get different components of the URL
console.log("Protocol:", myUrl.protocol);
console.log("Hostname:", myUrl.hostname);
console.log("Port:", myUrl.port);
console.log("Pathname:", myUrl.pathname);
console.log("Search Params:", myUrl.searchParams);
console.log("Query:", myUrl.searchParams.get("password"));
console.log("Hash:", myUrl.hash);
console.log("href:", myUrl.href);
