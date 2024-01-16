// Inheritance

class Animal {

}
class Bird extends Animal{

}

class Eagle extends Bird {

}

// Encapsulation
/*
In the simplest terms, encapsulation has to do with making a 
code implementation "hidden" from other users, in the sense 
that they don't have to know how my code works 
in order to "consume" the code.
*/

"abc".toUpperCase();

//Abstraction
/* 
Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.
*/

// Polymorphism
const bicycle = {
    bell : function(){
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell : function(){
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle);