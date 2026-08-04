const game = ["ff", "pubg","mili miltya", "lodo", "chess"]

// game.forEach((item) => {
//      console.log(item);
//     return item => forEach loop do not return any value
// })

const myNum = [1,2,3,4,5,6,7,8,8]

// const filter = myNum.filter((num) => {
//     return num > 4  // filter is return a value
// })

// console.log(filter);

// const newNums = []
// myNum.forEach((item) => {
//     if(item > 4){
//         newNums.push(item)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const myBooks = books.filter((bk) => bk.genre === "History")

  const userBookes = books.filter((bk) => {return bk.publish >= 1900 && bk.genre === "Science"} )
  console.log(userBookes);
  
//   console.log(myBooks);
  