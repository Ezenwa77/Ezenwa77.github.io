/* Primitive/simple data tyoes are so called because the only contain their own 
data type. They do not collect other data types(they are not collections). They 
have a limited storage space in computer memory(8 bits).They are copied by value,
not by reference.
*/
var x = 6;
var y = x;
console.log(y); //prints 6
/*Complex data types are so-called because they collect values of different data
types(they are collections).They can grow infinitely in size on computer memory.
They are copied by reference, not by value. This means that the variable name of
a complex data type points to the address/location of the value on computer 
memory, not on the value.
*/
var arr = [1, 2]; // declaring a variable arr, and assigning it to array [1, 2]
 arr.push(3);
// prints [1, 2, 3], showing that complex data types are 
 //copied by reference/address(arr), not by value
 console.log(arr); 