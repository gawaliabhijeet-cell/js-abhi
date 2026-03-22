/* this keyword in JavaScript refers to the current context or object that is executing the code. 
It allows you to access properties and methods of the current object. 
The value of this can change based on how a function is called, and it can refer to different objects in different contexts.*/


const user = {
    username: "abhi",
    price: 200,

    welcome_message: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}

user.welcome_message()
user.username = "sam"
user.welcome_message()

console.log(this) // it show empty cularly bracket

function one(){
    let user = "abhi"
    console.log(this.user);  // undifined only use in object
}
one()

// ***************** arrow function *****************
const two = () => {
    let user_a = "abhi"
    console.log(this.user_a);  // undifined only use in object
}
two()

// explicit return in arrow function
const three = (n1,n2) => {
    return n1 + n2
}
console.log(three(2,5))

// Implicit Return in Arrow Functions without curly braces and return keyword
const four = (n1,n2) => (n1/n2)
console.log(four(100,9))

