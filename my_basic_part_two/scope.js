// there are two type od scopre one is block scope and other one is global scope, One more scope is also available is functional scope 

let a = 100 //  let have a block scope
const b = 1000 // cosnt also have a block scope

var c = 10 //it have a functional scope

if (true) {
    let d = 100
    console.log(a) // here a is define in the global scope in the referenec of this block scope
}

//  console.log(d)  we can access "d" variable out  the scope because it is not present out the own scope

function one() {
    const user = "Akash"
    function two() {
        const website = "youtube"
        console.log(user) // we can access that user we it in global scopre as reference to that block scope
        //  here is some conceptof the closure we can acces the variable outside  the own scope by inner function only not outer 
    }
    // console.log(website)  but we can not access "website" becasue it outside the own scope
    two()
}
one()

// +++++++++++++++++hoistin+++++++++++++++++++++//


say() // here we can acces this function without any error this is called hoisting
function say() {
    console.log("say")
}


sayHi()  // here we get the error beacuse let and const are hoisted but they are in temoportal zone if they are in temporal zone si they throw error, and temporal zone live till we not assign any value to let and const variable
const sayHi = function () {
    console.log("Say Hi")
}