//Sum of all numbers in an array
const num = [10,20,30,40,50];
const sumNumbers = num.reduce((acc,ele)=>acc + ele,0);
console.log(sumNumbers);