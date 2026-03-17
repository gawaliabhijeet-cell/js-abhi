const marvel_hero =["thor","ironman","spider_man"]
const dc_hero =["superman","flash","batman"]

// marvel_hero.push(dc_hero)

// console.log(marvel_hero)
// console.log(marvel_hero[3],[1])

const all_hero =marvel_hero.concat(dc_hero)
console.log(all_hero);

const all_new_hero =[...marvel_hero,...dc_hero]
console.log(all_new_hero)

// he maximum recursion depth
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr = [1,2,[3,4,[5,6,7]]]
console.log(arr.flat(3))

// The console.log() static method outputs a message to the console.
console.log(Array.isArray("abhijeet"))

console.log(Array.from("abhijeet")) // An iterable object to convert to an array. Creates an array from an iterable object.
console.log(Array.from({name:"abhijeet"})) // intersting interviw

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))