"use strict"; //treat all JS code as newer version


let name = "Moon"
/*
-> -> data types <- <- 

number =>2 ^ 53
bigint
string => ""
null => standalone value
undefined => default value (value not assigned)
symbol => unique

*/

console.log(typeof name); // give the type of data used in this case its string 
console.log(typeof(name));//same as the above
console.log(typeof null);// the type of null is object


//data type conversionOperations
let score="44"
 console.log(typeof score); //print the datatype

 let scoreInNumber = Number(score) // this will convert the score(string type) to number 
 console.log(typeof scoreInNumber); //print the datatype

 
//(if the string is not a number/int then it will be stored as NaN(Not a number )
let score_1="44lewis"

let score_1InNumber=Number(score_1);
console.log(typeof score_1InNumber);// number
console.log(score_1InNumber); //NaN

/*
null->number => 0
undefined->number => NaN
string(char) -> number => NaN

"" -> bool => false;
"bcasj" -> boll=>true;

*/



