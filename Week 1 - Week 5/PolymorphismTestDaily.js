class goToOutside{
    useMotorcycle(){
        console.log("ride");
    }
}

class alfamart extends goToOutside{
    useMotorcycle(){
        super.useMotorcycle();
        console.log("Buy Food");
    }
}

class backToHome extends goToOutside{
    useMotorcycle(){
        console.log("Back to Home");
    }
}

var goAlfamart = new alfamart();
var goBackToHome = new backToHome();
goAlfamart.useMotorcycle();
goBackToHome.useMotorcycle();