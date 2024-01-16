// OOP 3: this

// OOP 1
var purchase1 = {
    shoes : 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}

purchase1.totalPrice(); //120

// OOP 2

var purchase2 = {
    shoes : 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}

purchase2.totalPrice(); //60