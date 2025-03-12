// stack memory always get copyy 
let myyoutubeChannel = "SharukhAmirdotcom"
let anotherName = myyoutubeChannel
console.log(myyoutubeChannel)
console.log(anotherName)

// heap memory always get referance

let userone = {
    useremail : "sharukhamir05@gmail.com",
    userpassword : "asd123" 
}
let usertwo = userone
usertwo.email = "sharukhamir10@gmail.com"
console.log(userone)
console.log(userone.email)
console.log(usertwo.email)