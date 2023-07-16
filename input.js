const { connect } = require("./client");
const { moveUpKey, moveRightKey, moveDownKey, moveLeftKey, messages } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (input) => { // code for reading user input
  if (input === '\u0003') {
    process.exit();
  }

  if (input === moveUpKey) {
    connection.write("Move: up")
  };

  if (input === moveRightKey) {
    connection.write("Move: right")
  };

  if (input === moveDownKey) {
    connection.write("Move: down")
  };

  if (input === moveLeftKey) {
    connection.write("Move: left")
  }

  if (messages[input]) {
    connection.write(messages[input]);
  }
};

module.exports = {setupInput};