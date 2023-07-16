const { connect } = require("./client");

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

const handleUserInput = (input, conn) => { // code for reading user input
  if (input === '\u0003') {
    process.exit();
  }

  if (input === 'w') {
    connection.write("Move: up")
  };

  if (input === 'd') {
    connection.write("Move: right")
  };

  if (input === 's') {
    connection.write("Move: down")
  };

  if (input === 'a') {
    connection.write("Move: left")
  };

  if (input === 'q') {
    connection.write("Say: It's dancing time")
  };

  if (input === 'e') {
    connection.write("Say: WeeWooWeeWoo")
  };

  if (input === '1') {
    connection.write("Say: Howdy")
  };

  if (input === '2') {
    connection.write("Say: git gud")
  };

  if (input === '3') {
    connection.write("Say: boop")
  };
};

module.exports = {setupInput};