class Train{
    constructor(color, lightsOn){
        this.color= color;
        this.lightsOn= lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightStatus(){
        console.log('Lights on?', this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

new Train();
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain);
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); //undefined
train4.lightStatus(); // Lights on? True
train4.getSelf(); // Train {color: 'red, lightsOn: true}
train4.getPrototype(); //{constructor: f, toggleLights: f, lightsStatus: f, getself: f, getPrototype: f}

class HighSpeedTrain extends Train {
    constructor(passenger, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passenger = passenger;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn= !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights(){
        super.toggleLights();
        super.lightStatus();
        console.log('Light are 100% operational.');
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights(); //undefined
train5.lightStatus(); // Lights on? true

highSpeed1.toggleLights();// Lights on? true, Lights are 100% operational.

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}