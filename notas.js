
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