/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variables/bindings, (var) and (let). const - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
var myBool = true; // Booleans are true or values
var myObject = {}; //Objects have curly braces
var myArray = []; //Arrays have square brackets
//function definition//
function myFunction(a, b){
   return a + b; 
};
console.log(myFunction(1, 2)); // invoking the function myFunction, and printing the result, 3 to the console
var myFriends; // prints undefined
null === null; // denotes the absemce of a meaningful value
console.log(null == undefined); // prints true
// NaN is 'not a number'. NaN is the only value in Javascript that does not equal itself
/* Infinity and -infinity-based computations should not be trusted
*/





