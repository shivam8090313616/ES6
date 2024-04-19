const sum = (...numbers) => {
    return numbers.reduce((acc,data) => {
       return data=acc + data;
     });
};
const result = sum(1, 2, 3, 4, 4, 12, 45, 78, 69, 56, 45, 787, 785, 44);
console.log("Result of sum:", result);
