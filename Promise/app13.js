let data = Promise.race([
    new Promise((success,error)=>{
        setTimeout(()=>{
            error('2 second Diff');
        },2000);
    }),

    new Promise((success,error)=>{
        setTimeout(()=>{
            error('2 second Diff');
        },2000);
    }),

    new Promise((success,error)=>{
        setTimeout(()=>{
            success('2 second Diff');
        },2000);
    })
]);

data.then((results)=>{
    console.log(results);
})

.catch((err)=>{
    console.log("catch block are fire with some error "+err);
});
