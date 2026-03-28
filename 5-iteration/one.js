// for
for (let index = 0; index < 10; index++) {
    const element = index;
    if (index === 5){
        continue
    }
    console.log(element)
    
}

for (let i = 0; i <=10; i++) {
    console.log(`outer loop value: ${i}`)
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`)
        // console.log(`${i} * ${j} = ${i * j}`)
    }   
}

let myArray = ["flash", "superman", "batman", "wonder woman"];
console.log(myArray.length) //4
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

