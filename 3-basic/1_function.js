function myname()
{
    console.log("a")
    console.log("b")
    console.log("h")
    console.log("i")
    

}

// myname()

function addTwoNo(n1,n2){
    console.log(n1 + n2)

}
// addTwoNo(4,3)
const result = addTwoNo(2,3)
// console.log("result:",result)

function login_user_name(username = "shambu"){

    if(username == undefined)
    {
        // console.log("please inter your number.")
    }
    else
    {

        return `${username} just logged in`
    }
}

// console.log(login_user_name("abhijeet"))
// console.log(login_user_name())

function calulate_cartprice(val1,val2,...a1){  // interwive question
    return a1

}

// console.log(calulate_cartprice(200,744,100))

/* function useing oubject */

const user = {
    username: "abhi",
    price: 100
}

function hand_object(user){
    console.log(`user name ${user.username} and price is ${user.price}`)
}

hand_object(user)
hand_object({         // another way to create a object
    username: "sam",
    price: 200
})

/* array useing function */
const myarray = [200,100,500]

function return_second(getArray){
    return getArray[1]
}
// console.log(return_second(myarray))
// console.log(return_second([200,7000,400]))