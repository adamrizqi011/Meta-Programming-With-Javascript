/* 

Exercise: Creating arrays and objects
In this exercise lab you will practice creating arrays and objects.

Tasks to complete
1. Create a new empty array literal and assign it to the variable clothes.

2. Add 5 of your favorite items of clothing as strings using the push() method.

3. Remove the fifth piece of clothing from the array using the pop() method.

4. Add a new piece of clothing using the push() method.

5. Use console.log to show the third item from the clothes array in the console.

6. Create a new empty object literal and assign it to the variable favCar.

7. Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

8. Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

9. Use the console to log the entire favCar object.

*/


var clothes=[];

clothes.push('blach t-shirt');
clothes.push('white t-shirt');
clothes.push('red t-shirt');
clothes.push('blue t-shirt');
clothes.push('Stone Island t-shirt');
clothes.pop();

clothes.push('green scarf');
console.log(clothes[2]);

var favCar={};
favCar.color ='red';
favCar.convertible= true;
console.log(favCar);

// Example Two

var handphone = [];
handphone.push('Iphone');
handphone.push('Samsung');
handphone.push('Xiaomi');
handphone.push('Infinix');
handphone.push('Vivo');
handphone.push('Huawei');

handphone.pop();
handphone.push('Asus');
console.log(handphone [0]);

var favPhone={};
favPhone.type = 'Iphone11';
favPhone.convertible = 'true';
console.log(favPhone);