/****************** reduce method ******************** */ 

const nynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myTotal = nynum.reduce(function (acc,currval){
    console.log(` accumulator value: ${acc} and corrent value: ${currval}`)
    return acc + currval
}, 0)
console.log(myTotal)

const myTotal1 = nynum.reduce((acc,curent) => acc + curent,0)
console.log(myTotal1)

const ShoopingCart = [
    {item: "laptop", price: 99990},
    {item: "phone", price: 999900}
]

const totalCost = ShoopingCart.reduce((acc,item) =>{
    console.log(`accumulator value: ${acc} and current item price: ${item.price}`)
    return acc +item.price},0)
console.log(totalCost)