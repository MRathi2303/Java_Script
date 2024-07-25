// ES6+ Features
// Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name="Moon";
const age="18";

let msg=`My name is ${name}, and I am ${age} old`;
console.log(msg);


//Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`
    ----------------------
    `);
const multiLineString = `This is a multi-line string
created using template literals.
It spans across multiple lines.`;

console.log(multiLineString);



// Destructuring
console.log(`
    ----------------------
    `);
// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let array=[2,4,6,8];

let[num1,num2]=array;
console.log(num1,num2)


// Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title : "the world champinon",
    author : "M.Rathi",
    year : 2024,
  };

  const {title,author}=book;
  console.log(`title=${title}, author=${author}`)


// Spread and Rest Operators
console.log(`
    ----------------------
    `);
// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements,and log the new array to the console.

const arr1=[1,2,3,4,];
const final=[...arr1,9,10];
console.log(final);


// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
let numbers=[2,3,4,6,5]
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  console.log(sum(...numbers));

 
 
  //-----> Default parameters

  console.log(`
    ----------------------
    `);
  //write a function that takes two parameters and return their product, with the second parameter having default value of 1. 
  //Log the result of the function calling with or without the function parameter.
  function product(a,b=1) {
    return a*b
  }

  console.log(product(5,2));
  console.log(product(5));


  //Enhanced object literals

  /*   --> You can now define functions as object properties without using the function keyword. This is called a method definition. <--  */
  console.log(`
    ----------------------
    `);

    //Use enhanced object literals to crete an object with methods and properties, and log the object to console

    const cars = {
        brand: "bmw",
        origin: "Germany",
        Who() {
          console.log(`${this.brand} is AMG Killer!`);
        },
      };
      
      console.log(cars.Who());

      // Create an object with computed properties name based on variables and log the object to the console.
    const firstName = 'John';
    const city = "Noida";

    const person = {
    firstName: firstName,
    city: city,
    };

    console.log(person);