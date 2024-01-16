// OOP Learn Test One

var phone={
    iphone : 10,
    stateTax : 1/2,
    totalPrice: function(){
      var calculation = this.iphone * this.stateTax;
      console.log('Total Price:', calculation)
    }
}

phone.totalPrice();

// OOP Learn Test Two

var book = {
    programming : 50,
    taxPrice : 1.2,
    totalPool : function(){
        var calculat = this.programming * this.taxPrice;
        console.log("This Price:", calculat);
    }
}

book.totalPool();

// OOP Test Three

let hardware= {
    mouse: 50000,
    taxStore: 1.5,
    totalPay: function(){
        var countUp = this.mouse * this.taxStore;
        console.log('This total pay', countUp);
    }
}

hardware.totalPay();