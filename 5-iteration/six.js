const num = [1,2,3,4,5,6,7,8,9,10]

const updatedNums = num.map((n1) => n1 + 10)

const updatedNums1 = num.map((n1) => {
    return n1 * 2
})

console.log(updatedNums)

updatedNums1.forEach((num)=> {
    console.log(num /2) 
})
console.log(updatedNums1)

const newnum = num
                .map((n1) => n1 *3)
                .map((n1) => n1 +1)
                .filter((n1) => n1 >20)
console.log(newnum)     
