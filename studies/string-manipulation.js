/*
Strng is any text inside double or single quotes. Strings are used for storing 
and manipiating texts. String manipulation refers the use of avaiable methods to
work on strings.
/*

//String Manipulation using operator
//+ is string concatenation operator
"Simon" + '' + "Ejim"; //Prints SimonEjim

// String Manipulation using methods
var myNameFirst = 'Simon';
console.log(myNameFirst.toUpperCase()); // string method- toUpperCase method. 
//Prints SIMON

var myName = 'JOHN';
console.log(myName.toLowerCase()); // string method- toLowerCase method. 
//prints john

//toString(): Returns the value of a string object
//Example:
var string1 = "my beautiful world";
console.log(string1.toString());// prints my beautiful world

//trim(); Removes white space from both ends of a string
//Example:
var string1 = '   Hello marksman!   ';
console.log(string1.trim());// prints Hello marksman

//valueOf(): Returns the primitive value of a string.
var string1 = 'Finite element';
console.log(string1.valueOf());// prints Finite element


//includes(): Checks whether a string contains the specified string/character.
var string1 = 'Bootcamp is getting hotter';
console.log(string1.includes('is'));// prints true

/*replace()Searches a string for a specified value, or a regular expression, and
returns a new strng where the specified values are replaced
*/
// Example:
var string1 = 'Engage in coding';
console.log(string1.replace('coding', 'games'));// prints 'Engage in games'


/*indexOf(): Returns the position of the first found occurrence of a specified 
value in a string
*/
//Example: 
var string1 = 'Hello, how are you?';
console.log(string1.indexOf('are'));// prints 11


/*lastIndexOf(), searches Returns the position of the last found occurrence of a
specified value in a string.
*/
//Example:
var string1 = 'Hello lady, you are a pretty lady';
console.log(string1.lastIndexOf('lady'));// prints 29


