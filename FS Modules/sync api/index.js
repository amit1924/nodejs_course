import * as fs from "fs";

// Create a new directory
fs.mkdirSync("f:\\newNode\\test", { recursive: true });

// Remove the old directory
fs.rmdirSync("f:\\newNode\\test");
fs.rmdirSync("f:\\newNode");
