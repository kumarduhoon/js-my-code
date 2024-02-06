// this is the way for create singleton object
const fbuser = new Object()

fbuser.id = "123ert"
fbuser.name = "Akash Kumar"
fbuser.email = "kumar@gmail.com"

// console.log(fbuser)

// how to access the propery from deep level nested object

const user = {
    id: "234err",
    "full name":
    {
        "user full name":
        {
            fname: "Akash",
            lname: "kumar"
        }
    }
}

// this is way to get the user fname from the nested object 

// console.log(user?.["full name"]?.["user full name"]?.["fname"])

// this "?" is an optional chaining which is protect from crash the website if property is not available in the object

//  how to concat the two objects into one

const obj1 = { 1: "a", 2: "d" }
const obj2 = { 3: "c", 4: "g" }
// console.log(obj1, "before")
// 1 way
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)
//  2n way but in this way we asign the value in obj1
const obj4 = Object.assign(obj1, obj2)
// console.log(obj1, "after")
// console.log(obj4)

// 3 way with the help of the spread opertor

const obj5 = { ...obj1, ...obj2 }
console.log(obj5)

// we want the all keys of the object in the array so we used

console.log(Object.keys(fbuser))
// we want the all values of the object in the array so we used
console.log(Object.values(fbuser))
// if we want to check the property is avilable or not
console.log(fbuser.hasOwnProperty("id"))