import * as fs from "fs";

// create a file

fs.mkdir("f:\\newNode", (error) => {
  if (error) throw error;
  console.log("directory created");
});
