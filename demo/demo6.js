async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {console.log("I love You !!");}, 3000);
    });
    console.log(myPromise)
  }
  
  myDisplay();

