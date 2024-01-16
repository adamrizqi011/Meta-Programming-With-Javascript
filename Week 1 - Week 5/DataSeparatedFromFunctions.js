// Data separated from functions

var shoes = 100; //data
var stateTax = 1.1; //data

function totalPrice(price, tax) { // function
    return price * tax; // Returns value
}
var toPay = totalPrice(shoes,stateTax); //Arguments
console.log(toPay);