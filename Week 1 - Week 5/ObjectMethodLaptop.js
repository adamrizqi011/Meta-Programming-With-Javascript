var laptop= {};
laptop.merk = 'Lenovo';
laptop.color ='gray';
console.log(laptop);
laptop.turnOnKey= function(){
console.log("Laptop On")
}
laptop.openProgram= function(){
    console.log("Visual Studio Code Opened");
}
console.log(laptop);
laptop.turnOnKey();
laptop.openProgram();
