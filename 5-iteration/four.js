const coding = ["js", "py", "rb", "java"]

// coding.forEach( function (val){
//     console.log(val)
// })

/* forEach is a method that is used to iterate over an array and execute a callback function for each element in the array.
 It takes a callback function as an argument and executes that function for each element in the array. 
 The callback function can take three arguments:
  the current element, the index of the current element, and the array itself.*/
function printME(item) {

    console.log(item)
}

coding.forEach(printME)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const mycoding = [{
    name: "javascript",
    extention: "js"
},
{
    name: "python",
    extension: "py"
}]

mycoding.forEach( (item) => {
    console.log(item.name,item.extension)
})