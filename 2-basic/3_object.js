// object literals

const my_Smb = Symbol("key1") // Returns a new unique Symbol value.

const ju_user = {
    name:"abhijeet",
    [my_Smb]:"mykey1",     // important interwiev
    age: 19,
    location:"latur",
    email: "abhij@gmaiil.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]

}

console.log(ju_user.email)
console.log(ju_user["email"])
console.log(ju_user[my_Smb])  // without using double cotetion
console.log(typeof my_Smb) 

ju_user.email="ag@gmail.com"
// Object.freeze(ju_user)
ju_user.email = "a@chatgpt.com"
console.log(ju_user)

ju_user.greeting = function()
{
    console.log("hello js user");
}

ju_user.greetingTwo = function()
{
    console.log(`hello js user ${this.name}`);
}
console.log(ju_user.greeting())
console.log(ju_user.greeting)
console.log(ju_user.greetingTwo())
