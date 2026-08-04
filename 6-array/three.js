const num = [1,2,3,5,6]

// const total = num.reduce(function (acc, currval) {
//     console.log(`accumalater: ${acc} and current value ${currval}`);
//     return acc + currval
// }, 0)

// console.log(total);

// reduce it is used in a mart add all value one by one like 1 + 3+ 44+34 atomatcaly

const shopingCart = [
    {
        itemName: "js",
        price: 2000
    },
    {
        itemName: "data science",
        price: 2000
    },
    {
        itemName: "mobile",
        price: 2000
    },
]

const shoping = shopingCart.reduce((acc,item) =>{
   return acc + item.price
},0)

console.log(shoping);
