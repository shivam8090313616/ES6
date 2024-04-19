function getData(dataId, getNextData){
    console.log("getting data ...")    

    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
        getNextData();
        }
    },4000);
}
getData(1, ()=>{
    getData(2, ()=>{
        getData(3);
    });
})
