//  this is alway refer to the current context of the object 
// in Node js environment "this" is a empty object but in browser "this" refer to global object window object
//  this only work with object not with function

const user = {
    fname: "Akash",
    lname: " kumar",
    fullname: function () {
        console.log(`${this.fname} ${this.lname}`)
    }
}

// user.fullname()
// here this is refer to current object  "user"


// arrow function does have a this, it alway refer to own parent this

function one() {
    const name = "Akash Kumar"
    console.log(this.name) // here is not refer to any current context becuse it alway working with object
    console.log(this)  // but it have something
}
// one()

const two = () => {
    const name = "Akash Kumar"
    console.log(this.name) // here is not refer to any current context because it alway working with object
    console.log(this)  // it refer to the window object in window and empty object in node
}
// two()
// Arrow object
const three = () => ("hello")

console.log(three())