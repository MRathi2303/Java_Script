// Immediately invoke functional expression (IIFE).
/*
---> Functions that are executed immediately after they are defined.
---> Remove the pollution of the global scope.
---> Format - (function defination)();
*/

(function hello(){
    console.log("hello user!");
    
})();


((name)=>{
    console.log(`hello ${name}!`);
    
})("Moon")