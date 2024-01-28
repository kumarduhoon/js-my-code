// let age = "23", string => number
// let age = false, Boolean =>  numder and value is 0 for false and 1 for true
// let age = undefined, it try to convert into number but not able, type is number but value is not NaN
// let age = "323er", it try to convert into number but not able, type is number but value is not NaN

let age = null //it is convert into the number and value is 0 which is not right as logically 

let ageNumber = Number(age);

// console.log(typeof (ageNumber))
// console.log(ageNumber)

// let isLoggedIn = 1,   1 => true and 0 => false
let isLoggedIn = "" // "" => false and "akash" => true

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof (booleanIsLoggedIn))
console.log(booleanIsLoggedIn);

