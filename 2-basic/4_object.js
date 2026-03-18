// const tinder_user = new object()  // single tun object
const tinder_user = {}  // non single tun object

tinder_user.id = "123"
tinder_user.name = "sammy"
tinder_user.isLoggedIn = false

// console.log(tinder_user)

const regular_user = {
    email: "some@gmail.com",
    full_name: {
        user_full_name:{
            first_name: "abhijeet",
            last_name: "gawali"
        }
    }
}
console.log(regular_user.full_name)
console.log(regular_user.full_name.user_full_name.first_name)
console.log(regular_user.email)
console.log(regular_user.full_name.user_full_name)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj5 = {obj1,obj2} // combine the string

// const obj4 =Object.assign({},obj1,obj2,obj3) //  when {} not use then string present in obj1

const obj4 = {...obj1,...obj2,...obj3}  // important 
console.log(obj4)

// in the array object
const users =[
    {
        id:1,
        email:"a@gmail.com"

    },
    {
        id:2,
        email:"b@gmail.com"

    },

]

users[1].email
console.log(tinder_user)

console.log(Object.keys(tinder_user))
console.log(Object.values(tinder_user))
console.log(Object.entries(tinder_user))

console.log(tinder_user.hasOwnProperty('isLogged'))
console.log(tinder_user.hasOwnProperty('isLoggedIn'))