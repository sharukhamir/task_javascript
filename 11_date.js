let myDate = new Date()
console.log(myDate);
//console.log(myDate.tostring());
console.log(myDate.IsoString);
console.log(myDate.toLocalString);
console.log(typeof myDate);

//and search other Date Functions

//let myCreateDate = new Date(2025, 0, 23)
//console.log(myCreateDate);
//console.log(myCreateDate.toString());

//let myCreateDate = new Date(2025, 0, 23, 5, 3)
//console.log(myCreateDate.toLocalString());

//yy,mm,dd

//let myCreateDate = new Date(2025-01-23)
//console.log(myCreateDate.toString());

let myCreateDate = new Date(1-23-2025)
console.log(myCreateDate.toString());


//and search other Date Functions

//console.log(myCreateDate.toLocalString());
//console.log(myCreateDate.toString());

//and search other Fomats

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate);
console.log(myCreateDate.getTime());
console.log(Date.now()/1000)
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time`)

//`` <- String interpullation

//newDate.toLocalString('default', {
//weekday: "long"
//timeZone: ''})
//and try other properties
