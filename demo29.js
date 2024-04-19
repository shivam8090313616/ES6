function renderApp() {
    console.log("Welcome!");
}
  
function renderLogin() {
    console.log("Please log in");
}

let authenticatedInput = prompt("Enter 1 for authenticated, 0 for not authenticated:");

let authenticated = !!parseInt(authenticatedInput);

authenticated ? renderApp() : renderLogin();
