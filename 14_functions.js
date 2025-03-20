//functions

function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("U");
    console.log("K");
    console.log("H");
}
//sayMyName()

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //console.log("Sharukh")
    //return result
    //console.log("Sharukh")
    //console.log(number1 + number2);
    return number1 + number2
}
//addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 5)
//console.log("Result: ", result)

function loginUserMessage(userName){
    if(userName === undefined){
        console.log("Please Enter a User Name");
        return
    }
    return `${userName} just logged in`
}
//console.log(loginUserMessage("Sharukh"))
console.log(loginUserMessage())

function loginUserMessage(userName){
    if(userName){
        console.log("Please Enter a User Name");
        return
    }
    return `${userName} just logged in`
}
//console.log(loginUserMessage("Sharukh"))
console.log(loginUserMessage())

function loginUserMessage(userName = "Sharukh"){
    if(!userName){
        console.log("Please Enter a User Name");
        return
    }
    return `${userName} just logged in`
}
//console.log(loginUserMessage("Sharukh"))
console.log(loginUserMessage("Sharukh"))

function calculateCartPrice1(...num1){
    return num1
    
}
console.log(calculateCartPrice1(200, 400 ,500, 2000))
function calculateCartPrice2(val1, val2, ...num1){
    return num1
    
}
console.log(calculateCartPrice2(200, 400 ,500, 2000))

const user = {
    firstname: "Sharukh",
    price: 200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.firstname} and price is ${anyobject.price}`);
}
//handleObject(user)

const myNewArray = [200, 400, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600]));

