// when we create a object using the constructor we create a singleton object beacuse in this we create a single object and used globally for every one

const obj1 = {
    name: "akash",
    "full name": "akash kumar",
    age: 26,
    bussiness: "carding"
}

// we can acess the property of the object with the help of dot notation and square brack, i perfered square bracket notation becasue if we get two work key name we can not access with the dot notation

// console.log(obj1["full name"])

//  how to update the value of any property in object

obj1["full name"] = "Akash Duhoon";
// console.log(obj1["full name"])

// if we want to stop update the property then we used freeze method and  we can not add new property while onject freezs

// Object.freeze(obj1)
// obj1["full name"] = "choudhary Akash Kumar";

//  Adding a new property
obj1["city"] = "shamli"
// console.log(obj1["city"])

// create a symbole and add into the object as a key 

let mysh = Symbol("key")

const obj2 = {
    name: "akash",
    [mysh]: "key",
    age: 26,
    bussiness: "carding"
}

// console.log(obj2[mysh]);
// console.log(obj2);

obj2["fullname"] = function () {
    console.log("Akash kumar")
}

obj2.fullname()

