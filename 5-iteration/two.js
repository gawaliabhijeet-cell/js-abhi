// for of

// ["","",""] => array in String
// [{},{},{}] => array in Object

const array = [1,2,3,4,5]
for (const num of array) {
    console.log(num)
}

const myString = "hello world"
for(const my of myString){
    console.log(`each character in string: ${my}`)
}

// important 
// maps is object => only store unique keys,for of loop is used to iterate over the map

const map = new Map()
map.set("in","india")
map.set("us","united states")
map.set("uk","united kingdom")

for(const [key,value] of map){
    console.log(key, ':-', value)
}

const myobj = {
    game: "cricket",
    player: "virat kohli",
    country: "india"
}