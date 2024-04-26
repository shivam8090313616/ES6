let data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve({name:"shivam",class:12});
    },5000);
});

data.then((item)=>{
    console.log(item)
})