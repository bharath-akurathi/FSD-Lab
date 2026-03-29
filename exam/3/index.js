const fs = require("fs");

// Write data to a file (if file is not present, file will be created)
fs.writeFileSync("example.txt", "Hello, this is a Node.js file operation example.");

console.log("File created and data written.");

// Read data from file
const data = fs.readFileSync("example.txt", "utf8");

console.log("File Content:");
console.log(data);

// Append data to file
fs.appendFileSync("example.txt", "\nThis line is appended to the file.");

console.log("Data appended successfully.");

// Read again after append
const updatedData = fs.readFileSync("example.txt", "utf8");

console.log("Updated File Content:");
console.log(updatedData);

// Rename file
fs.renameSync("rename.txt", "newFile.txt");

console.log("File renamed successfully.");

// Delete file
// fs.unlinkSync("newFile.txt");

// console.log("File deleted successfully.");