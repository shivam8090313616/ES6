function renderApp() {
    console.log("Welcome!");
  }
  
  function renderLogin() {
    console.log("Please log in");
  }
  
  let authenticated = 1;
  
  authenticated ? renderApp() : renderLogin();
  