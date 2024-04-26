let data = fetch("https://dummy.restapiexample.com/api/v1/employees");

data.then((item)=>{
    return item.json();
}).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})