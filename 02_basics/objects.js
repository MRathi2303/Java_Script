// --------->>>>>>>>>  Objects  <<<<<<<<<----------

//object literals

const user = {
    name : "Moon",
    age: 18,
    city : "Greater Noida",
};

//accessing the object elements
console.log(user.name);
console.log(user["name"]);


// changing the values of elemnts of the object

user.city="New delhi";
//Object.freeze(user) //this helps the user to lock/freese the values in the object (can't be changed).


//adding functions in the object.
user.greeting=function(){
    console.log("hello from the user");
}
user.greeting2=function(){
    console.log(`helo user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2())