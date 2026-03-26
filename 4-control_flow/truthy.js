const ueserEmail = [] // empty array is truthy value
if (ueserEmail){
    console.log("you have an email")
}
else{
    console.log("you dont have an email")
}

// falsy values
// false, 0, -0, bigint 0n, "", null, undefined, NaN

// truthy values
// "0", " " , [], {}, function(){}, true, 1, -1 ,3.14 , Infinity, -Infinity, 'false',

if (ueserEmail.length === 0){
    console.log("your array is empty")
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty")
}
/*
false == 0 // true
false === 0 // false
null == undefined // true
null === undefined // false
false == "" // true
false === "" // false
0 == "" // true
0 === "" // false
false == null // false
false === null // false
undefined == null // true
undefined === null // false
false == '' // true
false === '' // false
0 == '' // true
0 === '' // false
*/

/* Nullish coalescing operator (??): null undefined */

let val1;
val1 = 5 ?? 10 // 5
console.log(val1)
val1 = null ?? 10 // 10
console.log(val1)
val1 = undefined ?? 10 // undefined
console.log(val1)

/* Ternary operator condition ? expr1 : expr2 */

let age = 20
let myAge = age >= 19 ? "you are an adult" : "you are a child"
console.log(myAge)