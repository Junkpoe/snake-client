const net = require("net");

// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "local host",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on ('connect', () => {
    console.log("Succesfully connected to game");
    conn.write("Name: LNK");
  });

  return conn;
};

module.exports = {connect};