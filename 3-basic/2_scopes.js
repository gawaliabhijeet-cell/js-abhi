//  **************** scopes ****************

// {} is a scopes 

if (true){

    let a = 10
    const b = 20
    var c = 30  // var not apropreate

}


// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const user_name = "abhijeet"

    function two(){
        const website = "youtube.com"
        console.log(user_name)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const user_name = "abhi"
    if(user_name == "abhi")
    {
        const website = "youtube"
        console.log(user_name)
        console.log(user_name + website) // we are display the user_name and website at a one code
    }
}

// ************************* interstring ********************

function addone(n){
    return n +1

}
addone(5)

/*  another way to declar the function  */
const addtwo = function(n){
    return n - 2
}
addtwo(2)