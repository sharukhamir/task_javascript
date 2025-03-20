const mySym = Symbol("key1");
const jsUser = {
    firstName : "Sharukh",
    lastName : "Amir",
    "full Name" : "Sharukh Amir",
    age : 24,
    [mySym]: "mykey1",
    location: "Islamabad",
    email: "Sharukhamir05@mail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Saturday"]
}
console.log(jsUser.firstName)
console.log(jsUser["email"])
console.log(jsUser["full Name"])
console.log(jsUser[mySym])

jsUser.email = "sharukhamir10@gmail.com"
console.log(jsUser["email"])
console.log(jsUser["location"])
//Object.freeze(jsUser)//object freeze after it you can not make any changes
jsUser.location = "Karachi"
console.log(jsUser["location"])

jsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(jsUser.greeting());

jsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.firstName}`);
}
console.log(jsUser.greetingtwo());

//const fbuser = new Object()
const fbuser = {}
fbuser.id = "2617asd"
fbuser.name = "Sharukh Amir"
fbuser.isloggedin = false
//console.log(fbuser);
const regularUser = {
    email: "sharukhamir05@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Sharukh",
            lastname: "Amir"
        }
    }
}
//console.log(regularUser.fullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2}
//obj4 = Object.assign(obj1,obj2)
//obj4 = Object.assign({},obj1,obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)


const user = [
    {
        id: 1,
        email: "sharukhamir05@gmail.com"
    }]
    //user.[1].email
    console.log(fbuser);
    console.log(Object.keys(fbuser));
    console.log(Object.values(fbuser));
    console.log(Object.entries(fbuser));
    console.log(fbuser.hasOwnProperty('isloggedin'));
    
    
    const course = {
        courseName : "JavaScript",
        price: "6000",
        courseInstructor: "Sharukh Amir"
    }
    //course.courseInstructor
    const {courseInstructor} = course
    console.log(courseInstructor);
    
    const {courseInstructor: instructor} = course
    console.log(instructor);
    
    /*const navbar = (company) => {
        
    }
    navbar(company = "Sharukh")*/
    
    /*{
        "name" : "Sharukh",
        "courseName" : "JavaScript",
        "price" : "free"
    }*/
 //randomuser me api   
 //json formater
/*[
    {},
    {},
    {},
    ]    */
    
    