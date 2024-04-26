let data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    reject("Some Issue");
    },5000);
});

data.then((item)=>{
    console.log(item)
}).catch((error) => {
    console.error("Catch block fire "+error);
});


