// add two numbers
let a=10;
let b=20;
let sum=a+b;


//sub two numbers
let sub = b-a;

//mult two numbers
let mult = a*b;

//divide 
let div =b/a;

//reminder
let rem=b%a;


//print
//console.table([sum,sub,mult,div,rem]);
const print={
    "sum":sum,
    "sub":sub,
    "multipliction":mult,
    "divide":div,
    "reminder":rem,
}
console.log(print);

//Assignment Operators
console.log("Assignment operators");

console.log("Previously a=10 and after '+=' operator:",a+=2);
console.log("Previously b=20 and after '-=' operator:",b-=2);


//comparison operators
a=5;
b=10;
console.log("Comparison operators");
console.log(`Given: a = ${a}, b = ${b}`);
console.log(`Is a > b? : ${a > b}`); 
console.log(`Is a < b? : ${a < b}`); 

// Using greater than or equal to (>=) and less than or equal to (<=) operators
console.log(`Is 10 >= 10? : ${10 >= 10}`); 
console.log(`Is 10 <= 12? : ${10 <= 12}`); 

// Comparing a number and a string representation of the same number
a = 10;
b = "10";
console.log(`Given: a = ${a} (number), b = ${b} (string)`);
console.log(`Is a == b? : ${a == b}`); 
console.log(`Is a === b? : ${a === b}`); 

//logical operators
let x = true;
let y = false;
console.log("Logical operators");
console.log(`Given: x = ${x}, y = ${y}`);

console.log(`x && y: ${x && y}`);

console.log(`x && y: ${x && y}`);

console.log(`!x: ${!x}`);

//ternary operator 
console.log("ternary operator ");
let num=5;
const result= (num>0)? "positive" : "negative ";
console.log(`check ${num} is positive or negative = ${result}`);