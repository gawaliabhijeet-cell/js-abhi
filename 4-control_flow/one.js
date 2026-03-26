// if
const  isUserLoggedIn = true;
const  temperature = 30;
if (temperature ===40){
    console.log("hot day")
}
else{
    console.log("cold day")
}
console.log("done")

// <, >, <=, >=, !=, !==

const score = 100
if (score >= 90){
    const power = "fly"
    console.log(`you are a superhero and you can ${power}`)
}

const balance = 100
// if (balance > 500) console.log("you are rich")  don't do this, it is not readable

if (balance < 500) {
    console.log("you are poor")
}
else if(balance <= 700 && balance >500){
    console.log("you are middle class")
}
else{
    console.log("you are rich")
}

const uesrloggedIn = true
const debitCard = true
const LoggedInFromGoogle = true
const LoggedInFromEmail = true

if(uesrloggedIn && debitCard && (LoggedInFromEmail || LoggedInFromGoogle)){
    console.log(`you are logged in`)
}
