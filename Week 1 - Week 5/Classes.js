// Classes

class Car {
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    turboOn(){
        console.log("Turbo is on!");
    }
}

// const car1 = new Car("red", 120);
const car1 = new Car();
car1.turboOn();