const isPrime = (num) =>{
    if(num <= 1) return false;
    if(num <=3) return true;
    if(num % 2 ==0 || num % 3 ===0) return false;
    var i=5;
    while(i * i <= num){
        if(num % i ===0 || num %(i+2)===0) return false;
        i +=6;
    }
    return true;
};
const findPrime = (arr) => arr.filter((num)=>isPrime(num));
const numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const prime = findPrime(numbers);
console.log("primenumbers:", prime);