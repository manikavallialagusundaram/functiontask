const isPalindrome = (num) =>num.filter(word=>word === word.split('').reverse().join(''));
const word = ["level","pop","mom","dad","test","dada","mama","papa"];
const palindromeNumbers = isPalindrome(word);
console.log(palindromeNumbers);