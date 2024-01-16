// Inheritance

var bird= {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}

var eagle1 = Object.create(bird);
console.log("eagle1", eagle1);

console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings:", eagle2.hasWings);

var penguin = Object.create(bird);
console.log()
penguin.canFly = false;
console.log("penguin", penguin);

