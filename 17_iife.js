// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')



// Javascript Execution Context


// 1 Global Execution Context
// 2 Function Exectuion Context
// 3 Eval Execution Context

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    console.log(total);
}
//addNum();
//let result1 = addNum(val, val2);
//let result2 = addNum(10, 2);

function one(){
    console.log("one")
}
function two(){
    console.log("two")
    //three()
}
function three(){
    console.log("three")
}
one();
two();
three();