// One
var car ={};
car.color ='red'; // update the value of a property of the car object

//add a method to the car object so that it can be called as car.turnkey()

car.turnKey = function(){
    console.log('engine running');
}

console.log(car.turnKey);

//Two

/* 
First, I'll build a new object literally named car. I type var, space, car, space, equal sign, space, followed by a set of curly braces, and finally a semicolon.

Now, I'll extend the car object by assigning it a property named mileage. 

When I inspect the object, I can confirm that it contains a mileage property set to 98765. 

I want to add another property to the car object. This time, I will add a property named color and set it to the value of "red".

I can inspect the object again by typing its name into the browser console. So now, when I type console.log(car), I get an object with two properties: the mileage property, which is set to 98765, and the color property, set to "red". 

Great, now I've added two properties to my object.

Next, I want to add a method to my car object. And this method, when called, will output some text to the console. 

So, once again, I add another property to my car object. After all, a method is just another property of the car object. It's just another key-value par that the car object holds.

What's unique is that the value I'm assigning to it is a function. 
*/

var car = {};
car.milleage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function(){
    console.log("The engine is running")
}
car.lightsOn = function(){
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn();