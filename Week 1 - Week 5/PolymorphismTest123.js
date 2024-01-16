//Polymorphism Test 1

const wake= {
    alarm : function(){
        return "Ring, ring, ring, wake up!"
    }
}

function ringTheAlarm(thing){
console.log(thing.alarm());
}

ringTheAlarm(wake);

// Polymorphism Test 2
const playMusic= {
    sound : function(){
        return "Play Sound"
    }
}

function playTheMusic(thing){
    console.log(thing.sound());
}

playTheMusic(playMusic);

//Polymorphism Test 3

var messageSound= {
    message : function(){
        return "Ting, you have message from..."
    }
}

function messageTheSound(thing){
    console.log(thing.message());
}

messageTheSound(messageSound);

