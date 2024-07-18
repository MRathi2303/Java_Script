//Arrays

// Array Creation and Access
//  Create an array of numbers from 1 to 5 and log the array to the console.
const arr=[1,2,3,4,5];
console.log(arr);

//  Access the first and last elements of the array and log them to the console.

console.log("first element of the array :", arr[0]);
console.log("first element of the array :", arr[arr.length-1]);

// Array Methods (Basic)
//  Use the push method to add a new number to the end of the array and log the updated array.

arr.push(6);
console.log(arr);

//  Use the pop method to remove the last element from the array and log the updated array.

arr.pop();
console.log(arr);

// Use the shift method to remove the first element from the array and log the updated array.

arr.shift();
console.log(arr);

// Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(1);
console.log(arr);

//  => Array Methods (Intermediate)
//  Use the map method to create a new array where each number is doubled and log the new array.

const mapArr = arr.map((x)=> x*2);
console.log(mapArr);


//  Use the filter method to create a new array with only even numbers and log the new array.

const evenArr=arr.filter((x)=> x%2==0);
console.log(evenArr);

// Use the reduce method to calculate the sum of all numbers in the array and log the result.

let sum=0;
const SumArr=arr.reduce((x,y) => x+y, sum);
console.log(SumArr);

// *=> Array Iteration
//  Use a for loop to iterate over the array and log each element to the console.

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//  Use the forEach method to iterate over the array and log each element to the console.

arr.forEach((x) => console.log(x));


//  Multi-dimensional Arrays
// Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
console.log(matrix);

// Access and log a specific element from the two-dimensional array.
console.log(matrix[1][2]); 