// this is first way to create a Promise
const myPormise = new Promise(function (resolve, reject) {
    if (true) {
        // console.log("resolve")
        resolve("yes")
    }
    else {
        console.log("reject");
        reject("no")
    }
})
//  this is way to consumed the promise
myPormise.then(function (val) {
    // console.log(val)
}).catch(function (err) {
    // console.log(err)
})
//  we can also create like this and cosumed
new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("resolve");
        resolve()
    }, 1000)
})
    .then(function (val) {
        // console.log("rsolved")
    })
    .catch(function (val) {
        // console.log("Error")
    })

//  write a function to print the full name using promise

function fullName(fname, lname) {
    return new Promise(function (resolve, reject) {
        if (!fname || !lname) {
            reject("something is wrong")
        }
        else {
            const fullname = `${fname} ${lname}`
            resolve(fullname)
        }
    })
}

fullName("Akash", "Kumar")
    .then(function (val) {
        console.log(val)
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log("this is the function for print the full Name with the promise")
    })



// this the other use case of the promise

const promiseTwo = new Promise(function (resolve, reject) {
    const flage = true;
    const data = { userName: "Akash Duhoon", password: "aaksh" }
    if (flage) {
        resolve(data)
    }
    else {
        reject("Something went wrong");
    }
})

promiseTwo
    .then(function (item) {
        return item.userName;
    })
    .then(function (user) {
        console.log(user)
    })
    .catch(function (error) {
        console.log(error)
    })

// other use case

const promiseThree = new Promise(function (resolve, reject) {
    const flage = true;
    const data = { userName: "Akash Kumar Duhoon", password: "aaksh" }
    if (!flage) {
        resolve(data)
    }
    else {
        reject("Something went wrong mean gya");
    }
})

async function cumser() {
    try {
        const data = await promiseThree
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
cumser()