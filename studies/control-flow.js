/* Control Flow
Control flow refers to how we can make decisions in our code by asking true or 
false questions.Based on  the result of those questions, we can decide which 
code runs if the answer is true or if the answer is false.
*control flow may have more than one statement, in which case the statements are
executed in the order top-to-bottom. Control flow may also not be straight. it 
might have branches, in which case the program takes the proper branch based on 
the condition at hand. This is called conditional execution. Conditional 
execution may go with if, else-if, else, or switch statement.
*/
//IF-STATEMENT
Syntax: 
var condition = true;
if(condition){
    //perform this action
}

//IF/IF-ELSE/ELSE STATEMENTs
Syntax:
var condition = true;
var anotherCondition;
//if statement
if(condition){
    //perform this action
//else-if statement
}else if(anotherCondition){
   //perform this action
  //else statement: When everyother condition has failed
}else{
  // perform this action
}

/*
*The conditional statements go in-between the parentheses next to the if/else-if
statements.
*When a condition evaluates to true, the code in the curly braces {}/code block 
runs.
* We can have as many else-if statements as is needed.
* We can only have one if statement and one else statement.
*/

/*Syntax for Switch
var condition = 'something';
switch(condition){
    case 'string':
    console.log(smoeResult);
    break;
    case'anotherString':
    console.log(anotherResult);
    break;
    default:
    console.log(someResultElse);
    break;
}

* Switch statement evaluates an input expression, matching the expression's 
value to a case clause, and executes statements associated with that case.
*The keyword case simply means if the given condition evaluates/changes to the 
given case, like so:
var game = 'soccer';
switch(game){
    case 'volleyBall':
    console.log('I like it');
}
*We need a break statement to end the case. Break is added at the end of the 
block asociated with a case.
*/
//Working Example:
var myGame = 'soccer';
switch(myGame){
    case 'volleyBall':
        console.log('I can do it');
    break;
    case 'basketBall':
        console.log('I can equally do it');
        break;
        default:
        console.log('It depends on the game');
        break;
        
}

 