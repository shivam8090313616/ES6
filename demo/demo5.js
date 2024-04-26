

  const myDisplay = async () => {
    let myPromise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("I love You !!");
      }, 3000);
    });
  };
  
  myDisplay();
  