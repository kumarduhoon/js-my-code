//  this is the way how to use getter and setter function with class
class GetterSetter {
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }
    get user() {
        return this._user.toUpperCase()
    }
    set user(value) {
        this._user = value
    }

    get pass() {
        return this._pass.toUpperCase();
    }

    set pass(value) {
        this._pass = value
    }
}

const sky = new GetterSetter("Akash", "qwe123")
// console.log(sky.user)
// console.log(sky.pass)


//  how to define getter and setter function in function constructor

function Users(username, password) {
    this._username = username;
    this._password = password;

    Object.defineProperty(this, "username", {
        get: function () {
            return this._username.toUpperCase()
        },
        set: function (value) {
            this._username = value
        }
    })

    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const sky2 = new Users("akash", "asdfg");

// console.log(sky2.password)
// console.log(sky2.username)


//  object based getter setter function define 


const user2 = {
    _email: "akak@gmail.com",
    _password: "qwerty",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    },
    get password() {
        return this._password.toUpperCase()
    },
    set password(value) {
        this._password = value
    },
}
console.log(user2.email)
console.log(user2.password)