// Using Spread and Rest

//Join arrays, objects using the rest operator

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// Join Objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// Test me
const knowme = "Yups";
const arrayOfChars1 = [...knowme];
console.log(arrayOfChars1);  // [ 'Y', 'u', 'p', 's' ]

//Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow',
}
const car2  = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// Example copy either an object or an array into a separate two
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

// Test me Example... separate two.
const book = ['Atomic Habits', 'Filosofi Teras'];
const book2 = [...book];
book.pop()
console.log(book, "not", book2);