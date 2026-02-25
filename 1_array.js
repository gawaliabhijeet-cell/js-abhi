// array

const myArr = [0,1,2,3,4,5,true,"abjo"]
const myhero = ["ironman","batman"]

const myarr2 =new Array(1,2,3,4)
console.log(myArr[0])

// arrat method

myArr.push(6)
myArr.pop()
console.log(myArr)

myArr.unshift(9) // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
myArr.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr)

console.log(myArr.includes(9))  // return boolean value => false
console.log(myArr.indexOf(9))  // return -1 value 

const newarr =myArr.join()

console.log(myArr)
console.log(typeof newarr)

// slice,splice => interview question

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)

