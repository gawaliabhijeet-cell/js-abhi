// for in loop

const myObj = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    java: "java"
}

// for in loop
// object => for in loop is used to iterate over the object

for(const key in myObj){
    console.log(`${key} extension is ${myObj[key]}`)
}

const myArr = ["js","py","rb"]
for(const i in myArr){
    console.log(myArr[i])
}