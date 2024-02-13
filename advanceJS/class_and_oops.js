// Object literal
const obj1 = {
    name: "Akash",
    age: 26,
    gander: "male",
    getData: function () {
        console.log(this.age) // here this refer to the current context of the obj1
    }
}
// obj1.getData()

// why we requied this for acces any property in function
//  when javascirtp code run then global context is from and allocate the memory to function, object and all variable. when execute the code function formed a new execution context, In new execution context ja does not under that property who is define in global context, for refer that , these porperty belong to that.

// construction function

function User(name) {
    this.name = name;
    return this
}

const userOne = new User("Akash"); // new keyword always give new instance without affecting or over the old or original object or constrction function
// when we write new keyword then a empty object is formed, a constructor function beacuse of new key word, all the argument and function are inject to the this keyword

console.log(userOne.name)