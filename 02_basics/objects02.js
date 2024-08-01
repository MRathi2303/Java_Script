// --------->>>>>>>>>  Objects  <<<<<<<<<----------

// Singleton object

const student = new Object();

student.id = 2341452;
student.name = "Rahul";
student.loggedIn = false;

// ---> object nesting
const classroom = {
    secttion : 8,
    student_detail : student,
}

//console.log(classroom.student_detail.name);

const num = {1: "a", 2: "b"};
const num1 = {3: "c", 4: "d"};

// return a new object which conatin the previous objects.
// assign function
const num_final = Object.assign({},num,num1); // an empty obj is given here as it bocome the souce where the elemets of all other objects be stored.
//console.log(num_final);

// ---> Spread (...) expands the elements of the object into indidual elements.
const num_final2 = {...num,...num1};
//console.log(num_final2);

// get keys and values of the object
const keys = Object.keys(num);
const value = Object.keys(num);


// ---> Destructuring of Object
const car = {
    brand : "BMW",
    model : "M5 CS",
    horsepower : 625,
    touque : 750,
}

const {horsepower : bhp} = car; // here we use deconstructor and assign the value to bhp.
const {brand} = car; // here we don't give an other name to the element, we can directly call the element by name.
console.log(bhp);
console.log(brand);
