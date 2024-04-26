let data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});
data
.finally((item) => {
        console.warn("Promise finally block executed",item);
    })
.catch((err) => {
    console.warn(err);
})
