// Loops

// -> For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

console.log("multiplication table of 5");
for(let i=1; i<=10;i++){
    console.log(`5 x ${i} =${i*5}`)
}

// -> While Loop

// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(`sum of numbers from 1 to 10 = ${sum}`);

// Write a program to print numbers from 10 to 1 using a while loop.

console.log("numbers from 10 to 1");
let x=10;
while(x>0){
    console.log(x);
    x--;
}

// Do... While Loop
// Write a program to print numbers from 1 to 5 using a do... while loop.

console.log("numbers from 1 to 5");
let n = 1
do {
    console.log(n);
    n++;
} while (n<=5);

// Write a program to calculate the factorial of a number using a do... while loop.

let num=4;
let original=num;
let factorial=1;
do{
    factorial*=num;
    num--;
}while(num!=0);
console.log(`factorial of ${original} = ${factorial}`);