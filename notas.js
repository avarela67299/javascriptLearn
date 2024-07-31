
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
firstArray.push(10,11); // push appeds multiple values at the end


console.log(firstArray);