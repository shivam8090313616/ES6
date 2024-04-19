const readline = require('readline');
const getData=(dataId)=>{
     console.log("Function called : value is ",dataId);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Parameter of Function : ', (data) => {
  getData(data);
  rl.close();
});