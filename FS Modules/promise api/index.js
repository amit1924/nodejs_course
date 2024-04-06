import * as fs from "fs/promises";

// Creating Directory or Folder
// recursive true is nexessary to create a directory after deleting
try {
  await fs.mkdir("f:\\new\\courses", { recursive: true });
  console.log("folder created");
} catch (error) {
  console.log(error);
}

// Read the contents of the directory
// Ans:txt.txt
try {
  const files = await fs.readdir("f:\\new\\courses");
  console.log(`The contents of the directory is: ${files}`);
} catch (error) {
  console.log(error);
}

// Remove the directory
// The fs.rmdir() function is used to remove a directory, but it can only remove empty directories. If the directory you're trying to remove contains any files or subdirectories, the function will throw an error.

// try {
//   const removeDir = await fs.rmdir("f:\\new\\courses");
//   console.log(`The content  is deleted: ${removeDir}`);
// } catch (error) {
//   console.log(error);
// }

// Write any files in the directory
try {
  await fs.writeFile(
    "f:\\new\\courses\\text.txt",
    "Hello World text is written"
  );
  console.log("text file is created");
} catch (error) {
  console.log(error);
}
// or
// async function writeFile() {
//     const filePath = "F:\\new\\courses\\text.txt";
//     const content = "Hello World";

//     try {
//       await fs.writeFile(filePath, content);
//       console.log("File created successfully");
//     } catch (error) {
//       console.log("Error creating file:", error);
//     }
//   }

//   writeFile();

// Read a file

try {
  const data = await fs.readFile("F:\\new\\courses\\text.txt", "utf8");
  console.log(`this is the text file of text.txt : ${data}`);
} catch (error) {
  console.log(error);
}

// Append data
try {
  const data = await fs.appendFile(
    "F:\\new\\courses\\text.txt",
    "\n\nNode js is best"
  );
  console.log(`appending text inside: ${data}`);
} catch (error) {
  console.log(error);
}

// copy file
try {
  const filePath = "F:\\new\\courses\\text.txt";
  const newFilePath = "F:\\new\\courses\\info.txt";
  await fs.copyFile(filePath, newFilePath);
  console.log("copy Successfully");
} catch (error) {
  console.log(error);
}

// Get File Information
try {
  const filePath = "F:\\new\\courses\\text.txt";
  const newFilePath = "F:\\new\\courses\\info.txt";
  const data = await fs.stat(newFilePath);
  //   Ans:content inside:  false
  console.log("content inside: " + " " + data.isDirectory());

  //   Ans:content inside:  true
  console.log("content inside: " + " " + data.isFile());
} catch (error) {
  console.log(error);
}
