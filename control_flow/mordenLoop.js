//  for of loop is used to iterate the arrayand string

let arr = [2, 3, 4, 5, 6];

for (const key of arr) {
    // console.log(key)
}

// iteration on the string but we can not iterate the Object with this loop
let myStr = "akash Kumar"

for (const str of myStr) {
    if (str.includes(' ')) {
        continue;
    }
    // console.log(str)
}

// map in javascript : it hold the value in key-value pairs and it always hold unique value not dublicate value, it is different from the object becasue it maintian the order of the value in map

const myMap = new Map();

myMap.set("IN", "Indai");
myMap.set("UK", "United Kingdom")
myMap.set("RU", "Russia")
myMap.set("RU", "Russia")

// console.log(myMap)

for (const [key, value] of myMap) {
    // console.log(`${key} :-${value}`)
}

//  for in loop for used ot iterate the object
//  we can iterate the array with this loop but we can not iterate the Map with for in loop
const myObj = {
    "js": "javascript",
    "py": "python",
    "ts": "typescript"
}

for (const key in myObj) {
    // console.log(myObj[key])
}

for (const key in arr) {
    // console.log(arr[key])
}


//  for Each loop :- it is a high order function
// “higher-order function” is a function that accepts functions as parameters and/or returns a function.

let myArr = ["ka", "ak", "ls", "op", "gh"];

// myArr.forEach(function (item) {
//     console.log(item)
// })
function myfun(item) { console.log(item) }
// myArr.forEach(myfun)

// array.forEach((item, index, array) => {

// });