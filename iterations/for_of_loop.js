// for of loop

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    //console.log(i);
}

const greeting = "hello Everyone";
for (const letter of greeting){
    //console.log(letter);
}

// on MAP
const country_code = new Map()
country_code.set('In',"India")
country_code.set('USA',"United States of America")
country_code.set('Rus',"Russia")

for(const [key,value] of country_code){
    //console.log(key,":-",value);
    
}

//on Objects for of don't work
const games_Object = {
    game1 : "forza horizon",
    game2 : "M.S flight sim",
};


