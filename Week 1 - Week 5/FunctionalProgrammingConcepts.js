/* 1. First-class functions */ 

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

/* 2. Higher-order function */

// function addTwoNums(getNumber1, getNumber2) {
//     console.log(getNumber1() + getNumber2());
// }

// addTwoNums(specificNum, specificNum); // returned number is 84
// addTwoNums(specificNum, randomNum); // returned number is 42 + some random number

/*3. Pure functions and side-effects*/

// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// addTwoNums(5,6); // 11