## Prototype
### Everything in javacript is object 
- string -----> object ---> null
- array ------> object ---> null
- function-----> behave like a function and ------> object ---> null

### now understand how function behave like a Object 

````javascript
function add(num1, num2) {
    return num1 + num2
}

add.power = 3;

console.log(add(2, 3));
console.log(add.power)
// if we are going to console add.prototype in node environment 
console.log(add.prototype)
// result 
{}

//  In browser Environment
console.log(add.prototype)
// result 
{constructor: ƒ}
  constructor : ƒ add(num1, num2)
  [[Prototype]]: Object
````

## Use of new keyword behind the secne 
### Here's what happens behind the scenes when the new keyword is used:

### A new object is created: The new keyword initiates the creation of a new JavaScript object.

### A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

### The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

#### The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

