
const Details = {
    name: "shivam",
    DOB: "01:07:2003",
    type: "Jr. Webdeveloper",
    address: "Lucknow, Uttar Pradesh"
};

const mydetails = (Details) => {
    return "My name is " + Details.name+", Job type is "+Details.type+", My adress is "+Details.address+" and my date of birth is "+Details.DOB;
};

console.log(mydetails(Details));
