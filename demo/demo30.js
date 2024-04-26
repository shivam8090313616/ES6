const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function renderApp() {
  console.log("Welcome!");
}
  
function renderLogin() {
  console.log("Please log in");
}

rl.question("Enter 1 for authenticated, 0 for not authenticated:", function(authenticatedInput) {
  let authenticated = !!parseInt(authenticatedInput);
  authenticated ? renderApp() : renderLogin();
  rl.close();
});
