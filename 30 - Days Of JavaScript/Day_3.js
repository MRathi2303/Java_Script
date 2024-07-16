
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num=5;
if(num>0){
    console.log("positive");
}else if(num<0){
    console.log("negative");
}else{
    console.log("zero"); 
}



// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age=19
if(age>=18){
    console.log("eligible to vote");
}else{
    console.log("not eligible to vote");
}

// Write a program to find the largest of three numbers using nested if-else statements.
let a=8;
let b=12;
let c=3
if (a>b) {
    if(a>c){
        console.log(`largest = ${a}`);
    }else{
        console.log(`largest = ${c}`)
    }
}else{
    if(b>c){
        console.log(`largest = ${b}`);
    }else{
        console.log(`largest = ${c}`)
    }
}


/* Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day
name to the console.  */
 let dayNumber = 6
 switch (dayNumber) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("invalid day")
        break;
 }



/* Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F') based on a score and log the grade to the
console. */

let marks = 92;
 switch (true) {
    case (100>=marks>=90):
        console.log("Grade = A");
        break;
    case (90>marks>=85):
        console.log("Grade=B")
        break;
    case (85>marks>=60):
        console.log("Grade=C")
        break;
    case (85>marks>=60):
        console.log("Grade=D")
        break;
    case (0<marks<=40):
        console.log("Grade=F");
        break;
    default:
        console.log("Grade=F");
        break;
 }

 /* Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also
divisible by 400) and log the result to the console. */
let year=2024;
if((year%4==0 && year%100!=0) || year%400==0){
    console.log("leap year");
}else{
    console.log("not a leap year");
}


//Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let n=8;
console.log(n%2==0 ? "even" : "false");
