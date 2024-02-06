// how to de-structure the object 

const obj = {
    name: "Akash",
    age: 24,
    city: "shamli"
}

const { name } = obj;
// console.log(name)
//  if we want to chnage the name as of own simplicity then we can also do it

const { age: myage } = obj

// console.log(myage)

//  we can access two or more propery in one time

const { age, city } = obj

console.log(age, city)

// Json => javascript object notation 

// {
//     "name" :"akash",
//     "age" : 23
// }

// this is the JSON Syntax