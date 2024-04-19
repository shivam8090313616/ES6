var num=200; // globle
function text(){
    let num=700; //local var
    console.log("Value of num inside of the test"+num);
}
console.log("Value of num outside of the test"+num);
text();
