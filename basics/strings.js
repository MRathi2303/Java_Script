/* 
                            Strings in JavaScript 

The String object is used to represent and manipulate a sequence of characters.

*/

//  initialize a string in JS

// 1st 
var brand = "konigness";

// 2nd 
var maker = new String("konigness Gemera");

// methods,function for Strings in JS

console.log(brand.charAt(2));  // help to acess the character of string at a particular index.
console.log(brand.toUpperCase()); // convert all the char to upper case.
console.log(brand.toLowerCase());// convert all the char to lower case.
console.log(brand.concat(" ",maker)); // help to concatenates the string.
console.log(maker.includes("Gemera")); // performs a case-sensitive search to determine whether a given string may be found within this string or not.
console.log(maker.indexOf("Gemera")); // searches this string and returns the index of the first occurrence of the specified substring (case-sensitive).
