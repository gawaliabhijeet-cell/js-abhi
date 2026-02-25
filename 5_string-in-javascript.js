const name = "abhi"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count
 is ${repoCount}`);

const gameName = new String("abhijeet")

console.log(gameName[0])        // a
console.log(gameName.__proto__) // String prototype object

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf("j"))

 const newString = gameName.substring(0,4)
 console.log(newString)

 const anotherString = gameName.slice(-6,4)
 console.log(anotherString)

const newStringone ="  abhi   "
console.log(newStringone)
console.log(newStringone.trim())

const url ="https://abhi.com/demo/bin"
console.log(url.replace("demo","---"))

console.log(url.includes("abhi"))

console.log(gameName.split(""))  // split() always returns an array.

