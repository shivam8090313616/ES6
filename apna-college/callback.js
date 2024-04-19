const sum=(a,b)=>{
    console.log(a+b);
}
const calculator=(a,b, sumCallback)=>{
      sumCallback(a,b);
}
calculator(2,9,sum);

