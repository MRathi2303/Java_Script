// Objects

// => Object Creation and Access

// Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
  title : "the world champinon",
  author : "M.Rathi",
  year : 2024,
};
console.log(book);

// Access and log the title and author properties of the book object.

console.log("title : ",book.title," , author : ",book.author);

// => Object Methods
//  Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.TitleAuthor = function() {
  return `Title: ${this.title}, Author: ${this.author}`;
};

console.log(book.TitleAuthor());

//  Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(year) {
  this.year = year;
};

book.updateYear(2024);
console.log(book);


// Nested Objects
console.log("-----------------------------------");
//  Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const book1 = {
  title: "JavaScript Essentials",
  author: "J. Doe",
  year: 2021,
};

const book2 = {
  title: "Learning Python",
  author: "A. Developer",
  year: 2019,
};

// Create a library object with name and books (array of book objects)
const library = {
  name: "Library",
  books: [book, book1, book2]
};

// Log the library object to the console
console.log(library);


//  Access and log the name of the library and the titles of all the books in the library.


console.log("Library Name:", library.name);

console.log("Book Titles:");
library.books.forEach(book => {
  console.log(book.title);
});



// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.


// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.