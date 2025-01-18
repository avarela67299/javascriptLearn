
// Run the file

/* 
use "echo $SHELL" on terminal.
cd your/path/here
node yourFile.js
*/

// Variables

var firstVar = 5; //can be overwrite
let secVar = 5;  // can be declare once
const thirdVar = 5; //unique value

//Operators

// Arithmetic operators
let sum = 5 + 3;          // Addition
let difference = 10 - 4;  // Subtraction
let product = 6 * 7;      // Multiplication
let quotient = 20 / 5;    // Division
let remainder = 9 % 4;    // Modulus
let power = 2 ** 3;       // Exponentiation

let a = 5;
a++; // Increment: a is now 6
a--; // Decrement: a is now 5

// Compound assignment operators
let b = 5;
b += 3; // Addition assignment: b is now 8

let c = 10;
c -= 4; // Subtraction assignment: c is now 6

let d = 7;
d *= 2; // Multiplication assignment: d is now 14

let e = 20;
e /= 5; // Division assignment: e is now 4

let f = 9;
f %= 4; // Modulus assignment: f is now 1

let g = 2;
g **= 3; // Exponentiation assignment: g is now 8


//Strings

let myStr = "Alejo";
let myStrL = myStr.length; //length
let firstLetter = myStr[0]; //find first letter
let myfistLetter = myStr[myStr.length - 1]; //find last letter
let myName = `I am ${myString}`;  //variable interpolation using backticks

console.log(myStrL);

//Arrays 

let firstArray = [1,2,3,"four",[7,8,9]]; //Multiple values in one variable
let arrayValue = fistArray[0]; //access 1 with index 
let embededArray0 = fistArray[4][0] // access 7
firstArray[0] = "uno"; // modify 
firstArray.push(10,11); // push appeds one or multiple values at the end
firstArray.unshift(0, 0,5); // adds elements at the beguinning of the array
firstArray.pop(); // removes the last element from an array. It can be stored in a varible 
firstArray.shift(); // removes the first element from an array

console.log(firstArray);

// Functions

function firstFunction() {
    console.log("this is the structure to create a function")
}

firstFunction();

function suma(x, y){ //this are parameters of a function
    let x = x; //Variables declared without "let, const" inside a function are created in the global scope
    let y = y;
    return x+y; // return es la salida de la funcion
}

let suma1 = suma(1,2); // tihs are the arguments

// scope of varibles
const someVar = "Hat"; //global scope

function myFun() {
  const someVar = "Head"; //local scope
  console.log(someVar);
}
myFun(); // returns local scope
console.log(someVar) //returns global scope

/* When Return is encounter:
1. provides a Value
2. Exits the Function */

// Arrow Functions

//is good for simple functions (parameters) => some code;

function helloDeclaration(){          //Function Declaration
  console.log("hello");
}

const helloExpresion = function(){console.log("hello")};  //Function Expression

let helloArrow = () => console.log("hello"); // no need for return statement, it is implicit, if using curly braces, and no return, function returns undefined

let helloArrowP = (name, age) => {console.log(`hello ${name}`); console.log(`you are ${age} age years  old`)}; //more than 2 lines need to be inside the curly braces, and you explicitly need to declare the return
/* Whe you use parethesis after a callback function it is invoked when the element is redered
<button onClick={handleClick()}>Click Me</button>
to avoid this you nee to reference it instead of calling it removing the parenthesis
<button onClick={handleClick}>Click Me</button>
if you have parameters, you need to use an arrow functio
<button onClick={() => handleClick(name)}>Click Me</button>

*/
//other example
//1. unsing function declaration and referencing callback
function declaracion(){
  console.log("hello");
}
setTimeout (hello, 3000); //reference instead of calling so it is render at the right moment

//2 Using a function expresion
setTimeout (function(){console.log("hello")}, 3000); //no need no name, is anonymus function

//3 Using arrow function
setTimeout (() => console.log("hello"), 3000);

// If Else

function test(myCondition) {
  if (myCondition) {
    return "It was true"; // if true, it exits the function here
  } else if (myCondition) {
    return "Maybe";
  } else {
    return "It was false";
  }
  
}


// Boolean

//comparison operators return booleans
1==1; //(true) lose equality
1=="1"; //(true) compares two values, but it ignores datatype by coercion

1===1; //(true) strict equality
1==="1"; //(false) keeps datatype

1!=1; //(false) inequality
1!="1"; //(false) ignores datatype
1!==1; //(false)  strict inequality
1!=="1";//(true) keeps datatype

1 > "2"; //(false) This comparison operators will always convert data type.
1 < "2"; //(true)
1 <= 2;
1 >= 2;

1 == 1 && 2==2; //(true) adn operator, both statements have to be true
1== 1 || 2==2; // (true) or operator, one statement needs to me true

typeof "3"; // returns a string with the datatype of the value

// Switch Statement

/* 
-Similar to if else, but the value to compare is written only one time.
-it uses (===) so type and value must match
-it continues to compare the following cases if "break" is not use after the case statement. 
*/

function caseInSwitch(val) { // This fuction will return a greek letter depending on the numeric value given.
  let answer = "";
  switch (val){
    case 1: // if value === 1;
      answer = "alpha";
      break;
    case 2: // if value === 2;
      answer = "beta";
      break;
    case 3: // if value === 3;
      answer = "gamma";
      break;
    case 4: // if value === 4;
      answer = "delta";
      break;
    default: // else
      answer = "invalid"; 
  }
  return answer;
}
// this can be use in the case of an or statement
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

//Objects

const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

const perosonName = person.name; // access properties dot notation
const personName = person["name"]; // bracket notation

let accessVar = "name";
personName = person[accessVar]; // access with variables

person.name = "Erica"// change property
person.gender = "F"; // add property
delete person.gender; // delete property

// React Hook
//special function that allows functional components to use react features on function base components(useState, useEffect, useReducer)
//useState(): allows the creation of a stateful variable an a setter function to update its value in the virtual DOM [name, setName]
//useState must be use outside the return statement of the component

//Imports in React
//     variable name that you asign, it can be anything; from "This specifies the module you're importing from."
import React from "./react";
import EverithingFromReact from "react"; //works too
//To import named exports In another module (module2.js):
export const myVariable = 42;
export function myFunction() {
  console.log("I'm a named export!");
}
//to import it
import { myVariable, myFunction } from './module2.js';

import React, { useState as importedUseState } from "react"; //React, defoult export; You cannot rename them without using the "as" keyword
//or
import React from "react"; // Default export 
import { useState } from "react"; // Named export

//Array distructuring
// extracts values from an array and assign them to variables
const numbers = [1, 2, 3];
const [first, second, third] = numbers; //[first, second, third]) is the destructuring pattern
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
const numbers2 = [1, 2, 3, 4];
const [first2, , third2] = numbers2; // skip elements
//extract values from functions
function getNumbers() {
  return [1, 2, 3];
}

const [a1, b2, c3] = getNumbers();

console.log(a1); // 1
console.log(b2); // 2
console.log(c3); // 3