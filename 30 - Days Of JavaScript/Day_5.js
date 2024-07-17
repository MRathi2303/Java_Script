//  -> Functions

// Function Declaration
{
// Write a function to check if a number is even or odd and log the result to the console.

function checkEven(num) 
{
	if(num%2==0){
        console.log("Number is Even")
    }else{
        console.log("Number is odd");
    }
}

checkEven(8);


// Write a function to calculate the square of a number and return the result.

function calcSquare(num) {
    return num*num;
}

console.log(`square of ${8} is `,calcSquare(8));
}

// Function Expression
{
// Write a function expression to find the maximum of two numbers and log the result to the console.

function findMax(num1,num2){
    if(num1>num2){
        console.log(num1,"is maximum");
    }else{
        console.log(num2,"is greater");
    }
}

findMax(2,4);

// Write a function expression to concatenate two strings and return the result.
 function stringconcatenation(str1,str2){
    
    return str1 + " " + str2;
 }

 console.log(stringconcatenation("Moon" , "Rathi"));
}


// Arrow Functions
{
// Write an arrow function to calculate the sum of two numbers and return the result.

let a=5;
let b=8;
let sum =(a,b) => a+b;
console.log(`sum of ${a} and ${b} = ${sum(a,b)}`);

// Write an arrow function to check if a string contains a specific character and return a boolean value.
const str="Macbook Air"
let check = (char) => str.includes(char);
console.log(check("k"));

}

// Function Parameters and Default Values
{
// Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

let product = (a, b = 10) => a * b;
console.log(product(5));

// Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greeting = (name,age=23) => console.log("Happy Journey ", name , age,"old");
greeting("Nikhil");
}

//Higher-Order Functions
{
// Write a higher-order function that takes a function and a number, and calls the function that many times.

// fun is a normal function that prints something
function fun(){
    console.log("😀😀");
}
let times=5 ;

//its a high order function which takes a function as its parameter
function highOrderFxn(func,times){
    for(i=0;i<times;i++){
        func();
    }
}
highOrderFxn(fun,times);


// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second
//function to the result.

//we use already made functions sum and product 
 
function highFxn(func,func1,num){
    let result = func(num);
    func1(result);
}

highFxn(calcSquare,checkEven,2);

}