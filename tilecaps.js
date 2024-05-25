const isTileCase = (arr) =>arr.replace(/\w\S*/g,
txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
);
const convertToTitledCaseArray = (arr) => arr.map(isTileCase);
const word = ["hi meenu","this is an independent villa","enjoy the nature","have fun"]; 
const titledCasedArray = convertToTitledCaseArray(word);
console.log(titledCasedArray);






