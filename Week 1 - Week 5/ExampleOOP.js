//Example OOP

var purchase2 = {
    shoes : 50,
    stateTax : 1.2,
    totalPrice : function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase2.totalPrice();


var buy = {
    laptop : 1,
    stateTax : 1.2,
    totalPrice : function(){
        var calculat = buy.laptop * buy.stateTax;
        console.log('Total price:', calculat);
    }
}
buy.totalPrice();