//  how function behave like a function or like a object

function add(num1, num2) {
    return num1 + num2
}

add.power = 3;

// console.log(add(2, 3));
// console.log(add.power)

function user(name, score) {
    this.name = name;
    this.score = score
}
// "this" is refere to the current context in function because function formed a new exection context and to refer the varible belong to the paricular object we used the "this"

user.prototype.myName = function () {
    console.log(this.name)
}

//  here we create a object without new keyword  and its throw the error
// const localUser = user("Akash", 23)

// localUser.myName();

// when we create a object and if we inject any property later in that object we need to info while creating the object reference, "new" key is used to info that we create a some property later so that we required  "new" kay word

const localUser = new user("Akash", 23)

// localUser.myName();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


// Prototype

let arr = ["Akash", "Kumar"];
let str = "Akash kumar";

let obj = {
    name: "Akash Kumar",
    getName: function () {
        console.log(this.name)
    }
}

// Inject a property in object prototype 
// what is the prototype ?
// In JavaScript, the prototype is an inherent feature of every object. It is an object from which other objects inherit properties and methods. Each object has a hidden [[Prototype]] property that points to its prototype.

Object.prototype.akash = function () {
    console.log("Now every data can access me esliy")
}
// arr.akash(); // with array
// str.akash(); // with string
// obj.akash(); // with object



let str2 = "Akash "

String.prototype.trueLength = function () {
    console.log("my true langth is " + this.trim().length)
}

str2.trueLength()