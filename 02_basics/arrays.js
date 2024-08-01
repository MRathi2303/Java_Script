// --------->>>>>>>>>  Arrays  <<<<<<<<<----------


// -> [ elements stored in square brackets ]

const arr1 = [2,4,6,8,10]; // array of even numbers.
 
const cars = new Array("M5 CS", "Gemera", "AMG One");

/* 
     
-> Resizable 
-> Can store different datatypes, mix of tata types.
-> Can be accessed by using the index value starting from zero with the help of square brackets.
-> Arrays copy operation creates shallow-copies.
    ->Shallow copies : the copies share the same reference points.(any change will effect the original array also).

*/

// --------->>>>>>>>>  Arrays Methods  <<<<<<<<<----------

arr1.push(12) // add values to the array.
arr1.pop() // remove the last element.
arr1.unshift(0) // add element to the starting of the array. 
arr1.shift(); // remove the first element.

console.log(arr1.includes(3)); // .include() check for the value, is present in the array or not and return bool value.
console.log(arr1.indexOf(6)); // .indexof() return the index of the element or  return -1.
const arr2 = arr1.join(); // The join() method converts an array into a string by concatenating all the elements of the array into a single string.


// Slice & Splice
/*
Slice - It return the elements of the given range, without modifing the original array.
splice - It returns the elemet of the given range, by removing/replacing the elements from new array.
*/

console.log(arr1.slice(1, 3));
//console.log(arr1.splice(1, 3));
console.log(arr1);
console.log(arr1.splice(1,3,3,5,7)); // here elements of index 1,2,3 are replaced by values 3,5,7.
console.log(arr1);


//Concat & Spread
// concat Helps to join to different arrays and store it in new arrays.

const heros = ["iron Man", "Vision" , "Spider Man"];
const villian = ["ultron", "thanos", "loki"];
// const marvel = heros.concat(villian);
// console.log(marvel);

// Spread (...) expands the elements of the arrays into indidual elements.
 
const marvel1 = [...heros,...villian];
console.log(marvel1);

//convert to array

console.log(Array.from("moon"));
console.log(Array.of(23,24,25));

