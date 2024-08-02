// for in loop

const games_Object = {
    game1 : "forza horizon",
    game2 : "M.S flight sim",
};

for (const key in games_Object) {
        //console.log(key,":-",games_Object[key]);
}

// applicatio on arrays
const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);  // here only the index will be printed.
}