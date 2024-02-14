class User {
    constructor(username, password) {
        this.username = username;
        this.password = password
    }
    hidepass() {
        return this.password + "asd"
    }
}

const sky = new User("Akash", 123);

// console.log(sky.hidepass())

// how class work behind the scene


function User2(username, password) {
    this.username = username;
    this.password = password
}

User2.prototype.hidepass = function () {
    return this.password + "asd"
}
const sky2 = new User2("Kumar", 321);

// console.log(sky2.hidepass())


// inheritance using class

class User3 {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(this.username)
    }
}

class Teacher extends User3 {
    constructor(username, email) {
        super(username)
        this.email = email
    }
    printUserName() {
        console.log(this.username)
    }
}

const myTeacher = new Teacher("Aakash", "123")
// myTeacher.printUserName()

// how this class work behind the secen

function User3fn(username) {
    this.username = username
}

function TeacherFn(username, password) {
    User3fn.call(this, username)
    this.password = password
}

TeacherFn.prototype.getName = function () {
    console.log(this.username)
}
const myTeacherfn = new TeacherFn("Akash", 123);
myTeacherfn.getName()

//