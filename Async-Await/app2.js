const getData = async () => {
    try {
        const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
};

// Update the HTML content after fetching data
// (async () => {
//     try {
//         const data = await getData();
//         let data1=JSON.stringify(data);
//         document.querySelector('p').innerHTML = data1[11].employee_name;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();
(async () => {
    try {
        const data = await getData();
        console.log(data); // Log the fetched data to see its structure
        const firstEmployeeName = data.data[0].employee_name;
        document.querySelector('p').innerHTML = firstEmployeeName;
    } catch (error) {
        console.error('Error:', error);
    }
})();


//    let data= fetch("https://dummy.restapiexample.com/api/v1/employees");
//    data.then((item)=>{
//     console.log(item);
//     return item.json();
//    }).then((res)=>{
//     console.log(res);
//    })

