//const readlineSync = require('readline-sync');
//let YOUR_VALUE = readlineSync.question("YOUR_QUESTION");

const readlineSync = require("readline-sync");

const name = readlineSync.question("Cual es tu nombre?");
const favFood = readlineSync.question("What is your favorite food?");
const favColor= readlineSync.question("What is your favorite color?");

console.log("Your name is %s", name);
console.log("Your favorite food is %s", favFood);
console.log("Your favorite color is %s", favColor);