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

// console.log(typeof (booleanIsLoggedIn))
// console.log(booleanIsLoggedIn);


// console.log(+true);
// console.log(-8 + "8"); // string -88
// console.log(typeof (-8 + "8"));
// console.log("8" - 8); // number 0
// console.log(typeof ("8" - 8));


console.log("2" > 1); //true because here only value is checked by javacript 

console.log(null > 0) //false beacuse null convert some time into 0 or some time into NaN
console.log(null == 0)//false beacuse null convert some time into 0 or some time into NaN
console.log(null >= 0) //true beacuse null convert some time into 0 or some time into NaN

console.log(undefined > 0)  //false
console.log(undefined > 0)//false
console.log(undefined > 0) //false

//  always used the strictly type check which is check the data type and value both

console.log(undefined === 0)
console.log("0" === 0)