/* Function
//Function: A function is a subprogram designed to perform a particular task. 
//They are objects. Function runs when it is called or invoked. A function is 
//called by having the function name and a pair of parentheses that may have 
//some argument. A function name is an identifier declared when the function is 
//created, or a name attached to a binding in the case of function expression. 
//Values may be passed into the function and used within it. They optionally 
//return an output. Functions are hoisted name and body. 

Syntax for a named function: 
 function <name>(parameter1, parameter2){
     //function body
 };
//Example:
function sum(a, b){
    return a + b;
}console.log(sum(2, 4));// prints 6

*The two phases to using function: 
1) We declare/define a function(function 
definition)
2) We call/invoke the function

*/
function add(parameters){ //defines the function add
      // code to be executed
} //function definition or declaration 
/*Next, we execuce or call or invoke the function.
*    add(); // calls the function functionName
*/
/*Function parameters are the placeholders for the arguments to be passed to a 
function. They are created when we define a function, and separated by commas. We can pass in a maximum 
of 255 parameters.   Arguments are the actual value passed to a function during function 
call.
*/

/*ASSIGNING A FUNCTION TO A VARIABLE
const sum1 = add(a, b);
    return;
    
console.log(sum1);
*/
/* Input to a function (argument) is specified in parentheses after function 
name when a function is called, functionName(). Function may take no input as 
shown. Outputs are returned, and may be printed on the console. There, optionally, 
are output. When no return is specified, the function would return undefined. 
*/
/*Functions are hoisted, both declaration and body. So, once a function is 
created in a program, it can be used everywhere in the program(available 
everywhere in the program)
*/

/*
SCOPE
In javascript, function creates a new scope. Scope determines the aceessibility 
of the variables. Each function creates a new scope, and if blocks and loop 
blocks  create scopes as well. Variables created in a function are not 
accessible from outside the function. But a variables created in a 
higher(parent)  scope is accessible from an inner(child)scope. There are local 
and global scopes. Local  scope is at the function-level and block-level. When a
variable declared in a certain scope has the same name as a variable declared in
an outer scope, variable shadowing occurs
*/

/*
CLOSURES
A closure is a function that retains access to an outer(enclosing) function's 
variables even afyer the outer function has returned or closed
*/
//Example: 
//The function below has one closure
var a = 6;
function myCalcu(){
    
    return a * a;
}