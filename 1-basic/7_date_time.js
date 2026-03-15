/* &&&&&&&&&&&&&& date &&&&&&&&&&&&&&&&&& */ 

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
/* interviw purpose important */
console.log(typeof myDate) // date is a object 

// let myCreatedDate = new Date(2026,7,25)
let myCreatedDate = new Date("01-14-2026") 

console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))


