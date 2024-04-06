function greet(username) {
  console.log(`hello ${username}`);
}

function hello(name) {
  console.log(`my name is ${name}`);
}

// Send this function to the other file

module.exports = { greet, hello };
