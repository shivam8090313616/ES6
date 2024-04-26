let data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    })
})
.then((item) => {
    console.log("First Then Block " + item);
    return item;
})
.then((item2) => {
    console.log("Second Then Block multiply by 10 = " + item2 * 10);
    return item2 * 10;
})
.then((item3) => {
    console.log("Third Then Block multiply by 10 = " + item3 * 10);
});
