import { greet, hello, sum } from "./main.js";

greet("Amit");
hello();
console.log(sum);

// ReferenceError: __filename is not defined in ES module scope
// console.log(__filename);
