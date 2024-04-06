import path from "path";

//Ans:index.js
console.log(path.basename(" F:\\NodeJS Lessons\\Path Modules\\index.js "));

// Ans: index
console.log(path.basename("F:\\NodeJS Lessons\\Path Modules\\index.js", ".js"));

// dirname
// Ans: F:\NodeJS Lessons\Path Modules
console.log(path.dirname("F:\\NodeJS Lessons\\Path Modules\\index.js"));

// Extension name
// Ans:.js
console.log(path.extname("F:\\NodeJS Lessons\\Path Modules\\index.js"));

// join path
// Ans:f:\courses\redux-tooolkit
console.log(path.join("f:", "courses", "redux-tooolkit"));

// GO up a level
// Ans:f:\courses
console.log(path.join("f:", "courses", "redux-tooolkit", ".."));

//ANs :F:\NodeJS Lessons\courses\redux-tooolkit
console.log(path.join("F:\\NodeJS Lessons", "courses", "redux-tooolkit"));

// path.normalize()
// Ans:F:\NodeJS Lessons\courses\redux-tooolkit
console.log(path.normalize("F:\\NodeJS Lessons\\courses\\redux-tooolkit"));

// path.parse()
// Ans:{
//   root: 'F:\\',
//   dir: 'F:\\NodeJS Lessons\\courses\\redux-tooolkit',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }
console.log(
  path.parse("F:\\NodeJS Lessons\\courses\\redux-tooolkit\\index.js")
);
