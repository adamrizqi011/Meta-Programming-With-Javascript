/* 

Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

1. First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

2. Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

3. Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

4. For all the remaining values of i, your code will console log just the value of i.

Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/

for(var i= 1; i < 11; i++){
    if(i == 1){
        console.log('Gold medal');
    } else if (i == 2){
        console.log('Silver medal');
    } else if(i == 3){
        console.log('Bronze medal');
    }else{
        console.log(i)
    }
}