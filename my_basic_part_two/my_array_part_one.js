// way of creating array in jaavscript

const myarr =  ["akash",3,false,"hi"] ;

const myarr3 = new Array(2,3,4,5,) // this is the array object 

const myArr2 = [3,4,5,6,5,8]

myArr2.push(2) // add an element in array in the last
myArr2.pop() // remove the element from the array in the last

myArr2.unshift(8) // add an element in the starting side of the array 
myArr2.shift() // remove the element from the staritng side of the array

//console.log(myArr2.includes(8)) return false if not available  
//console.log(myArr2.indexOf(8)) return -1 if element is not available 

const myarrr =  myArr2.join(); // array convert into the string
//console.log(myarr)

// difference bewteen slice and splice

const myslice = myArr2.slice(1,3) // it's give me a new array without effect the original array and last index is also not count 
// console.log("array before slice",myArr2)
// console.log(myslice)
// console.log("array after slice",myArr2)

const mysplice = myArr2.splice(1,3) //it's give me a new array with effect the original array and last index is also count 

console.log("array before splice",myArr2)
console.log(mysplice)
console.log("array after splice",myArr2)