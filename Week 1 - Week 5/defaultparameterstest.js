class calcu{
    constructor(number1 = 10, number2= 20, number3= 30, string1 = "Result:", bool1 = false){
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calcula(){
        if(this.bool1) {
            console.log(this.string1, this.number1 + this.number2 + this.number3);
            return;
        }
        return "Final calcu value of bool1 is incorrect"
    }
}

var better = new calcu();
better.calcula();

//true 60
//false final calcu value of bool1 is incorrect