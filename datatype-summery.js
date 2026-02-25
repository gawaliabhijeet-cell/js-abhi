// primitive

// 7 type: string,number ,boolean,null(empty),undefined,symbol,BigInt

const score = 100
const scorevalue = 111.3

const inLoggedIn = false
const outsideTemp = null 
let userEmail = undefined

const id = Symbol("123")
const anotherId = Symbol('123')
console.log(id == anotherId) // not equal



// Reference (Non primitive)

// Array,Objects,Function

const Heros = ["Shictiman","ironman","speaderman"] // arry

let obj ={
    name : "abhijeet",
    age : 22,
}

const myfunction = function() {
    console.log("hi");
}

myfunction(); // calling the function

console.log(typeof outsideTemp); // outsideTemp => object 
console.log(typeof Heros ) // heros typeof  => object 