// Variable Interpolation

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}!`); //display both variables using template literals

// ES5
var greet2 = "Hello";
var place2 = "World";
console.log(greet2 + " " + place2 + "!"); //display both variables without using template literals

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 