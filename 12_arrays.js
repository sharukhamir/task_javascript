const myArr = [0, 1, 2, 3, 4, 5, "Sharukh"]
console.log(myArr[0])

const myHeros = ["Sharukh", "Salman", "Saif"]
const myArr2 = new Array(1, 2, 3, 4, 5)

//Array methods

console.log(myArr.push(6))
console.log(myArr.push(7))
//consle.log(myArr)
//myArr.pop()
//consooe.log(myArr)

//myArr.unshift(9)
//console.log(myArr)

//myArr.shift()
//console.log(myArr)

//console.log(myArr.includes(9))//false
//console.log(myArr.index(9))//-1
//console.log(myArr.includes(3))

//const newArr myArr.join()

//console.log(myArr)
//console.log(typesof newArr)

// slice and splice

//console.log("A", myArr);
//const myn1 = myArr.slice(1, 3)
//console.log(myn1);

//console.log("B", myArr);
//const myn2 = myArr.splice(1, 3)
//console.log(myn2);

//const myn3 = myArr.splice(1, 3)
//console.log("C", myArr);
//console.log(myn3);
const pak_team = ["Babar Azam", "Muhammad Rizwan", "Shaheen Afridi"];
const ind_team = ["Virat Kohli", "Rohit Sharma", "Muhammad Shami"];
//pak_team.push(ind_team); //push
//console.log(pak_team);
//console.log(pak_team[3][1]);
//team = pak_team.concat(ind_team); //concat
//const team = [...pak_team, ...ind_team] //spread
//console.log(team);
const anotherarr = [1, 2, 3, [4, 5, 6], 7, 8,[5, 8,[2, 7],8], 10]
const  real_another_arr = anotherarr.flat(Infinity);
console.log(real_another_arr);
console.log(Array.isArray("Sharukh"));
console.log(Array.from("Sharukh"))