// forEach and filter methods coll back functions
const coding = ["js", "py", "rb", "java"]

const value = coding.forEach( (item) => {
    console.log(item)
    return item
})

console.log(value) //undefined
/* forEach does not return anything, 
it is used to iterate over an array and execute a callback function for each element in the array */

/************** FILTER METHOD **************/

const num = [ 1,2,3,4,5,6,7,8,9,10]
const filteredNums = num.filter((num) => num >4) // filter method returns a new array
console.log(filteredNums)


// anotehr way of using filter method
const fileteredNum2= num.filter( (num)=> {
    return num < 4
})
console.log(fileteredNum2)

// example using foreach and filter method together
const newNums = []
fileteredNum2.forEach((num)=>{
    if(num % 2 === 0){
        newNums.push(num)
    }
})
console.log(newNums)

// example

const books = [
    {title: "book1", author: "author1", year: 2000},
    {title: "book2", author: "author2", year: 2010},
    {title: "book3", author: "author3", year: 2020},
    {title: "book4", author: "author4", year: 2005},
];

let  uerBooks = books.filter((bk)=> bk.year === 2010)
uerBooks = books.filter((bk)=> {
    return bk.author === "author3"
})
console.log(uerBooks)
