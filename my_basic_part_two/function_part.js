//  function is heart of the javascript 

function sayHello() {
    console.log("Hello world") // this is the function defination
}
// sayHello  : this is the function refenece

//sayHello() // this is function execution

//  we can store the value of function a variaable

function sum() {
    return 2 + 4 // when return encounter in the function, function is terminate
}
const result = sum() // here we stroe the function result in variable 

// console.log(result)

// in function defination when we passed the  variable this is call "parameter"

function sumOfTwoNumber(num1, num2) {
    return num1 + num2 // here num1 and num2 is the parameter
}
// in function execuation when we passed the  value  this is call "argunment "
sumOfTwoNumber(2, 3) // here 2 and 3 is argument 

// +++++++++++++++++++++++++++++++++++++++++++++++//

//  how to use "rest opertor" in the javascript function
//  this is the live example of the rest opertor when we going to calcluate the price of the cart item,so we used the rest operator because item are not fixed in the cart so collect all the dynamic item in cart we used the rest operator  

function calCartPrice(...price) {
    return price
}

// console.log(calCartPrice(200, 300, 4000, 400))

//  how to pass the object in the function as an argument

const user = {
    name: "Akash",
    age: 26
}

function userDetails(anyObject) {
    return anyObject.name
}
// console.log(userDetails(user))

// how to pass the array in the function as an argument

const users = [202, 20, 4]
function userInfo(anyArray) {
    return anyArray
}
console.log(userInfo(users))