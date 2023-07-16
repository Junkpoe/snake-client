const {connect} = require(`./client`)
const {setupInput} = require(`./input`)

// code to setup interface to handle input from user with stdin


console.log("Connecting ...");
let conn = connect();
setupInput(conn);

