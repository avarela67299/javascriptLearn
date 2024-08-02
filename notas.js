
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