/*
 * VARIABLES
 Variables are named identifiers that point to the values of the primitive types
  and to the location/address of the complex datatypes. They are called variables 
  because we can change the value and type of value to which they point.
  
  
 var, let and const:
 - To declare a variable, we use the keyword, var, followed by a 
 //name (id or alias) for our variable. 
 
 //const and let bindings could also be used to declare variables.
 */
 //Examples for var, let and const declaration and assignment:
 var skills = 'Dribbles';
 let myGame = 'Soccer';
 const product = 5 * 3;
 
 /*
 Declarations with var:
 - is re-assignable
 - is hoisted
 - is scoped to functions
 - not scoped to if blocks and loop blocks
 
 
 Declarations with let:
 - is re-assignable
 - not effectively hoisted(actually hoisted but not shown)
 - is scoped to functions
 - is scoped to if blocks and loop blocks
 
 Declarations with const:
 - is not re-assignable
 - is not effectively hoisted(actually hoisted but not seen)
 - is scoped to functions
 - is scoped to if blocks and if blocks
 /*

1. declaration //

 /*At the declaration phase, the variable myName is undefined because we have 
 NOT initialized it to anything, shown below:
 */
 var myName;
console.log(myName); // prints => undefined

// 2. INITIALIZATION OR ASSIGNMENT //
myName = 'john';
console.log(myName); // prints => john

//  RE-ASSIGNMENT //
myName = 'bob';
console.log(myName); // prints => bob

//  We can assign and re-assign anything to a variables/bindings, (var) and
//(let), but we cannot do this with constants (const)//
var myVariable = 1;
myVariable = "someString";

let myGame1 = 'soccer';
myGame1 = 'volleyBall';

/*Hoisting: Javascript's default way of moving all declarations to the top of 
the scope before the statements of a program are executed. This is basically the
reason var variables willnot throw a reference error if you try referencing them
before they are declared. Instead, theywill return the value undefined.
for var declarations, only the declaration, not the initialization is hoisted to
the top.
*/


var myFriends; // prints undefined
null === null; // denotes the absemce of a meaningful value
console.log(null == undefined); // prints true
/* NaN is 'not a number'. NaN is the only value in Javascript that does not 
*equal itself
* Infinity and -infinity-based computations should not be trusted. This is 
*because infinity -1 still gives infinity
*/





