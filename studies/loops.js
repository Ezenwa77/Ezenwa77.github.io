                 
/*Loops
//While loops are used mostly for instances of looping based on whether a 
condition is true or not, or repeating an action but for indefinite number of 
times. It is created using while, then parentheses, state a condition while true 
will continue to execute the block of code in the body of the while loop.

//While-loop Syntax:To create a while-loop we use the keyword, while, then in 
parentheses, state the condition that while true will continue to execute the 
block of code in the body ofthe while-loop. After the block of code comes the 
incrementor(looping forward) or the decrementor(looping backward). It is shown 
below:
*/
//Example: forward loop
var count = -1;
while( count < 20){
    console.log(count);
    count++;
}
//backward loop
var count = 50;
while(count > 30){
    console.log(count);
    count--;
}


/*
For-in Loop: Used for looping over objects. It loops through the properties of 
an object. The block of code inside the loop will be executed onec for each 
property.The for-in loop pulls out the keys of an object one-by-one, and this 
allows us to use the keys to get the values of in object.
For-in Loop Syntax:
for(var key in object){
    //code block to be executed 
}
 - var: A variable that iterates over the properties(keys) of an object.
 - object: The specified object that will be iterated
*/
//Example:
var str1 = '';
var object1 = {x: 1, y: 2, z: 3};
for (var property in object1){
str1 += object1[property];
}
console.log(str1);//prints 123

/* 
For-loops are used for arrays
* 3 statements for For-Loop- var index = 0; - starting looping here, 
index < array.length ;- stopping looping here; index++; -incrementing the index 
by 1.
For-Loop Syntax:
Forward Loop
 - for(var index = start; index < array.length; index++)
'for' begins the for-loop declaration. The  'for' lets teh Javascript 
interpreter know all of the following code before the closing curly brace } will
be read as a loop.
 - var index = startCondition; is the initial/start condition. It tells us the 
 number the loop will start with.
  - index < array.length; is the stop condition. It tells us the last condition 
  the loop will run (if true) before it stops.
  - index++ is the incrementor. It tells us to increment the value of index by 1
  after each iteration. 
  //There could also be a looping backward like so:
  for(var index = array.length-1; index > end; index--), in which case 
  index = array.length-1 is the start condition, index > end is the end 
  condition, and index-- is the decremntor.
*/
//Example: looping forward
var arr2 = [];
arr2.push(i);
for(var i = 0; i < arr2.length; i++){ // looping forward
    console.log(arr2);
}
var arr3 = []; //declaring an arr3 array
arr3.push(i);
for(var i = arr3.length-1; i > 0; i--){// looping backward

console.log(arr3);
}
var person = {};//declaring a person object

for(var key in person){
    console.log(person[key]);
}

