const userEmail = "akash@google.com"

if (userEmail) {
    // console.log("Email is available")
} else {
    // console.log("Do dot have a email")
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value we can assumed that, the value is true and execute the code be half of that value
//   "0", [], "false",{}, " ",function(){}

let myArray = []

//  check array is return falsy or truthy value like that

if (!myArray.length) {
    // console.log("Array is empty")
}

// check empty object is retunr falsy or truthy value

let myObject = {}

if (!Object.keys(myObject).length) {
    // console.log("Object is empty")
}

// Nullish coalescing operator "??" is work on null and undefind values 

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10
val1 = null ?? undefined ?? 200

console.log(val1);


// ternary operator

// condition ? true : false

let email
email ? console.log(email) : console.log("email is not there")