const myPI = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(myPI)

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// } these are hide property, which are not changeable 

const myObj = Object.create(null);

// console.log(myObj)

const myObject = {
    name: "Akash",
    age: 123
}

// const myObject3 = Object.getOwnPropertyDescriptors(myObject)

Object.defineProperties(myObject, {
    name: {
        writable: false,
        enumerable: false,
        configurable: false
    },
    age: {
        writable: false,
        enumerable: false,
        configurable: false
    }
})

const myObject3 = Object.getOwnPropertyDescriptors(myObject)
// console.log(myObject3)

for (let key in myObject) {
    console.log(key + " :- " + myObject[key])
}

let arr = [1, 2, 3, 4, 5];
// const myarr = Object.getOwnPropertyDescriptors(arr)
// console.log(myarr)


Object.defineProperties(arr, {
    0: {
        writable: false,
        enumerable: false,
        configurable: false
    },
    1: {
        writable: false,
        enumerable: false,
        configurable: false
    }
})

const myarr = Object.getOwnPropertyDescriptors(arr)
console.log(myarr)