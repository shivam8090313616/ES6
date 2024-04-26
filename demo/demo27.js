const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
  
    getPeople() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const rnd = Math.random() < 0.5; 
          // if (rnd) {
          //   reject("Error retrieving people data");
          // } else {
          //   resolve(this.people);
          // }
          if(rnd){
            resolve(this.people);
          }
        }, 2000);
      });
    },
  };
  
  // Retrieve and log the people data, handling errors
  server.getPeople()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  