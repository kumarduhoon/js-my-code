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
