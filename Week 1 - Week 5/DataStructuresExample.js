// The forEach()method

const fruits =['kiwi','mango','apple','pear'];
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

//Examples two forEach()method

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

console.log(`${veggies}. ${fruits}`);

// The filter() method

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
return num > 20;
})

// The map method
[0,10,20,30,40,50].map ( function(num){
return num /10
})

// Working with Object in JavaScript

const result = [];
const drone = {
    speed: 100,
    color: 'yellow',
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key){
    result.push(key, drone[key])
})
console.log(result);

//Working with Object in Javascript Test 2
const finish= [];
const exam = {
    task : 1,
    done : 'ok',
}

const finishKeys = Object.keys(exam);
finishKeys.forEach( function(key){
    finish.push(key, exam[key])
    })
console.log(finish);

// Working with Maps in JavaScript

new Map();

// Example Maps

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

// Specific Value use get() method.
bestBoxers.get(1); // "The Champion"

// Working with Sets in JavaScript

new Set();
const repetitiveFruits = ['apple','pear','apple','pear','plum','apple'];
const uniqueFruits  = new Set(repetitiveFruits);
console.log(uniqueFruits);