const accountId = 144483
let accountEmail="abhi@gamil.com"
var accountPassword ="12233434"
const accountCity ="latur"
let accountState;
// accountId=2  not allowed
accountEmail="adsf@gmail.com"
accountPassword="23232"
const accountCity="343"  

/*
prefer not to use var
because of issue in block scope and funstional scope
*/

console.log(accountId);
console.table([accountEmail,accountId,accountCity,accountState])

console.log("Git test");