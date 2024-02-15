// A closure gives you access to an outer function's scope from the inner function, In javascript, closure are created every time a function is created, at function creation time

function Outer() {
    let name = "closure"
    function inner() {
        console.log(name)
    }
    inner()
}
Outer()
//  this example explain me how lexical scope is working


//  now come to closure