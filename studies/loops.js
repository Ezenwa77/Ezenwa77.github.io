                 
/*Loops
*While loops are used mostly for instances of looping based on whether a 
condition is true or not, or repeating an action but for indefinite number of 
times. It is created using while, then parentheses, state a condition while true 
will continue to execute the block of code in the body of the while loop.
*/
Example:
var count = -1;
while( count < 20){
    console.log(count);
    count++;
}

/*For-loops are used for arrays
* 3 statements for For-Loop- var index = 0; - starting looping here, 
index < array.length ;- stopping looping here; index++; -incrementing the index 
by 1.
*/
Example:
var arr2 = [];
arr2.push(i);
for(var i = 0; i < arr2.length; i++){ // looping forward
    console.log(arr2);
}
var arr3 = []; //declaring an arr3 array
arr3.push(i);
for(var i = arr3.length-1; i > 0; i--){

console.log(arr3);
}
var person = {};//declaring a person object

for(var key in person){
    console.log(person[key]);
}

