// two type of datatype in javascript 
// 1. primitive  Number, string , bigInt, boolean,undefined, null, symbol (this is called by value )
let number = 28;
let my_string = "Akash";
let big_int = 23453456789098765434567890n;
let isLoggedIn =  false;
let temp  =  null;
let age ;
let id =  Symbol("23443")
 console.log(typeof(number))
 console.log(typeof(my_string))
 console.log(typeof(big_int))
 console.log(typeof(isLoggedIn))
 console.log(typeof(temp))
 console.log(typeof(null)) // it return it is object type data typo
 console.log(typeof(age))  
 console.log(typeof(undefined)) 
 console.log(typeof(id))


//   non primitive (this is called by reference) Array , Object and Function

const arry = ["Akash","kumar"]

const myObj = {
    name : "Akash"
}

const myfun = function(){
    console.log("Hello world");
}

console.log(typeof arry) // this return object 
console.log(typeof myObj) // this is return object
console.log(typeof myfun)  // this is return function object