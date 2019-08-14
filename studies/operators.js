/*Operators*/
/*
* Assignment Operator: assigns a value to the operand on the left of the 
operator. The value assigned would be on the right of the assignment operator.
= is assignment operator.
*/
//Example:
var hobby = 'reading';
//Example: 
let game = 'soccer';


/*Arithmetic Operators take numerical values, which may be literal or variable, 
as their operands.
(+, -, *, /, and %) are binary arithmetic operators
*/
//Examples:
console.log(2 + 3);// prints 5
console.log(7 - 5); // prints 2
console.log(2 * 5);// prints 10
console.log(15 / 3);// prints 5
console.log(15 % 5);// prints 0


/* Comparison Operators
There are strict comparison -> ===, and converting comparison -> ==. Strict 
comparison compares both type and contents, and true only if both match. The 
converting comparison converts the operands to the type before making the 
comparison.
There are also relational comparisons/binary operators - <=, >=, >, and <, which
first converts the operands to same type(primitives) and then compares them. 

/*Examples of comparison operators;
//(==, !=, ===, !==, <, >, <=, >=) are comparison operators
 == -> loosely equals
*/
2 == '2';//prints true
// != -> Not equal to
2 != 4; // prints true
//=== -> strictly equals. Compares data both in type and value
5 === 5; // prints true
//!== -> strictly not equal to
5 !== 'five';// prints true
// < -> lessthan 
3 < 5; // prints true
// > -> greaterthan
10 > 9;// prints true
//<= -> lessthan or equal to
7 <= 8; //prints true
// >= -> greaterthan or equal to 
8 >= 8;//prints true
/*Strings comparison: For strings, the comparison is based on some standard 
lexicographical ordering, using UNICODE values. Uppercase letters are always 
less than lowercase letters.
Example: 
*/
"Z" < "a".


/*Binary Logical Operators
These are operators that that use two operands/values
(&& and ||) are binary logical operators
*/
//Examples:
console.log(3 > 1); //prints true. Binary comparison operator
console.log(3 > 2 && 7 > 6); //prints true . Binary comparison and binary logical operatos
console.log(3 > 4 || 5 > 8); // false


/*Unary Operators: Operators that take one operand/value. The following are 
unary oprators: +, -, !, ~, ++, -- and cast operator.
//- and + as Unary operators
They take only one operand, and they are evaluated before other operations. 
*/
//Example: 
console.log(7 + -2); //prints 5

/*
! is a unary logical operator which flips te truthyness or falsyness of a 
value
 */
 //Example:
 console.log( 5 !== 'five'); // prints true

//typeof is a unary operator to find a value's type
typeof 'house' === 'string'; //prints true


/* - is a unary operator to negate a number
   ~ is called Bitwise. It performs a binary NOT operation, by inverting all the bits in the operand 
     and return a number.
*/
//Example: 
console.log(~null);// prints -1.
console.log(~Infinity);//prints  -1
console.log(~false);// prints  -1
console.log(~true); // prints -2

/*
//Ternery Operators is the only Javascript operator that takes three operands. 
Often used as a shortcut for the if-statement.
*/
//Example:
function getCharge(member){
  return (member ? "$5.00" : "$15.00");
}
console.log(getCharge(true));// prints $5.00

/*
? is a ternery operator to pick one of a and b, based on c.
*/
//Example:
let person = {name: 'Maddy', age: 25, hobby: 'soccer'};
person.hobby = person.age >= 16 ? 'Yes' : 'No';// this is ternery operator ? in use

//+ is string concatenation operator
"Simon" + '' + "Ejim"; //Prints SimonEjim