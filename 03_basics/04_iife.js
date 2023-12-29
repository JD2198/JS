// Immediately Invoked Functions Expressions (IIFE)

(function chai(){
    console.log("DB connected")
})()

()() // 1st one where we will write function definition, 2nd parentheses for execution call insteaad of chai() calling seprately

// iife global scope ke pollution se problem 

// as below you can use two iife together

(function ice(){
    console.log("DB connected")
})();

(function cream(){
    console.log("Second DB connected")
})();

((name) => {
    console.log(`DB connected ${name}`);
})('hitesh')