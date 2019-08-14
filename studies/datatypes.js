/* .DATATYPES:



*/
//Number: A simple data type. Example: 2

//string: A simple data type. Example: 'game'

//boolean: A simple data type,true/false, that results from conditional statements.

//Array: A complex data type. Arrays can be called collections because they can 
//be a collection of other data types. Example: [2, 4, 'cat', true]

//Object: A complex data type. Objects can have other data types in them, and so 
// are called collections. Example: {nameFirst: 'John', nameLast: 'Benafa'};

//Function:A first-class object. Functions are complex data types. Example; 
//function changeLetter(z){return a;}

//undefined: A variable declared but not assigned or not reachacble. Example: 
// let game; is undefined

//null: A null data is null. It's not an object. it's non-existent

// NaN: means not a number. Example:
let x = 'house';
console.log(5 * x);//prints NaN

//Infiity and -Infinity: Infinity and -infinity-based computations should not be trusted. This is 
//because infinity -1 still gives infinity

/*Primitive/simple data tyoes are so called because they only contain their own 
data type. They do not collect other data types(they are not collections). They 
have a limited storage space in computer memory(8 bits).They are copied by value,
not by reference.
*/

//Numbers: A numeric data type that could be an integer, floating-point,doubles 
//or bignums. Example:
var xym = 3.6;
//String: The text form representation for holding data. Strings are enclosed in
//quotes.Strings have length property and some methods like string concatenation
// operations using + or += operators, extractiing substrings using substring 
//method substring(), checking for the location of substring using indexOf() 
//method.
//Examples:
var string1 = 'I am a string';
var string2 = 'I have dataype';


// Boolean: This is a datatype that results from logical comparison. It's a 
//true/false value. 
//Example:
var myBool = true;
7 > 9;// prints false


// Array: Arrays are ordered collection of data. They are a complex datatype, 
//which might collect simple or complex datatypes in them. Unlike the 
//simple/primitive datatypes which are limited to 8 byte storage space, arrays 
//have unlimted storage space in memory. 

//In Javascript, array elements are indexed, from 0, which makes it possile to 
//access the elements of the array. Array has methods that enable us to 
//manipulte the array elements.
//Examples:
var myGames = [];// declares an empty array literal 
myGames.push('soccer');//adds soccer to myGames array. Would print ['soccer']
myGames.unshift('volleyBall');//adds volleyBall myGames at index[0]/the front, 
//and would print['volleyBall', 'soccer'] when consoled
myGames.pop();//takes off the last element of the array. Would print 
//['volleyBall'] when consoled
myGames.shift();//Takes off the first array element. Would print [] when 
//consoled.
//Arrays have length property. Example below:
myGames.length;//gives the length


//Object: The object wrapper is a pair of curly braces, which the Object
//constructor creates. The object constructor creates an object that corresponds
//to the type of the given value. It creates an empty object for a null/undefined
//value.
//Example:
var activity = {};
activity['sports'] = 'soccer';
activity.hobby = 'reading';
activity['favFood'] = 'cheeseBurger';
activity.fruit = 'berry';
console.log(activity); // prints{sports: 'soccer', hobby: 'reading', 
//favFood: 'cheeseBurger', fruit: 'berry'}


//Function: A function is a subprogram designed to perform a particular task. 
//They are objects. Function runs when it is called or invoked. A function is 
//called by having the function name and a pair of parentheses that may have 
//some argument. A function name is an identifier declared when the function is 
//created, or a name attached to a binding in the case function expression. 
//Values may be passed into the function and used within it. They optionally 
//return an output. Functions are hoisted name and body. Syntax: 
//function <name>(){};
//Example:
function sum(a, b){
    return a + b;
}console.log(sum(2, 4));// prints 6


// Undefined: When there is a declaration of variable without assignment, the 
//variable is said to be undefined. It could also be said to be undefined if the
//evalution result is not a defined value.
//Example:
var myGame;
console.log(myGame);// prints undefined


//Null: This is an intentional absence of a value.
//Example: 
var myGame = null;
if(myGame === null){
    console.log('not available');
}else{
    return myGame;
}


//NaN : NaN means not a number. It results when an arithmetic evaluation is made 
//on a non-number value. NaN is printed on the console.
//Example: 
var product = 5 * 'x';
console.log(product);// ptrints NaN


//Infinity and -Infinity: Infinity is a numeric value representing positive .

//infinity. -Infinity is a numeric value reoresenting negative infinity.

/*Infinity is displayed when a numeric number exceeds the upper limit of the 
floating point numbers, which is 1.797693134862315E+308
*/
/*-Infinity is displayed when a number exceeds the lower limit of the floating 
point numbers, which is -1.797693134862316E+308
*/
/*Infinity-based calculations are not to be trusted because 
*/
console.log(Infinity - Infinity);// prints NaN
console.log(Infinity -1);// prints infinity
console.log(Infinity + Infinity);//prints Infinity
console.log(2 /0);// prints Infinity
console.log(100000000 / Infinity);// prints 0


/*
PRIMITIVE DATATYPE AND COMPLEX DATATYPE
*Primitive or simple datatypes are immutable(unalterable), but complex datatypes 
are mutable(alterable).
*Simple datatypes include: numbers, strings, boolean, undefined, null, symbols 
and bigint, while complex datatypes include arrays, objects and functions.
*Complex datatypes can grow infintely in size in computer memory, while primitive 
datatypes are limited to 8 bytes of computer memory.

//COPY BY VALUE AND COPY BY REFERENCE
/*Primitive datatypes are copied by value. This means that the value is actually
copied.
*/
//Example: 
var z = 10;
var y = z;
console.log(y);// prints 10
/*Complex datatypes are copied by reference. This means that the variable name 
refers to the address or location of the data in memory, and the reference or 
address is copied, not the value.
*/
//Example:
var hobbies = {sports: 'Soccer', reading: 'Mathematics'};
hobbies.reading = 'Javascript';
console.log(hobbies);// prints {sports: 'Soccer', reading: 'Javascript'}