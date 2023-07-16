const {connect} = require(`./client`)

// code to setup interface to handle input from user with stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (input) { // code for reading user input
  if (input === '\u0003') {
    process.exit();
  }
}

console.log("Connecting ...");
setupInput();
connect();

