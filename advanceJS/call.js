// function Setuser(user) {
//     this.user = user;
// }

// function Createuser(user, email, password) {
//     Setuser(user)
//     this.email = email
//     this.password = password
// }

// const myCreateuser = new Createuser("Akash", "ak@gmail.com", "123")
// console.log(myCreateuser)

// we get the result like that { email: 'ak@gmail.com', password: '123' }, we did not get user name beacuse when setuser function encounter then new execution context is formed and after that this EC deleted, we not able to hold the user value in anywhere that why we get that result


// to solved this problem
// to hold the reference of the setuser we used call method

function Setuser(user) {
    this.user = user;
}

function Createuser(user, email, password) {
    Setuser.call(this, user)
    this.email = email
    this.password = password
}

const myCreateuser = new Createuser("Akash", "ak@gmail.com", "123")


// call help to pass the current context to other function so we can able the property there easly 

