function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`The ${this.flavor} icecream has melted `)
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream;
appleIcecream;

let apple = new String("apple");
apple;

let pear = "pear";
pear;

let plum = new String('plum') === new String('plum');
plum;