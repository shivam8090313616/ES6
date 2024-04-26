let data = Promise.allSettled([
    new Promise((success,error)=>{
        setTimeout(()=>{
            success('4 second Diff');
        },4000);
    }),

    new Promise((success,error)=>{
        setTimeout(()=>{
            success('2 second Diff');
        },2000);
    }),

    new Promise((success,error)=>{
        setTimeout(()=>{
            success('5 second Diff');
        },5000);
    })
]);

data.then((results)=>{
    console.log(results);
})
.catch((err)=>{
    console.log(err);
});
