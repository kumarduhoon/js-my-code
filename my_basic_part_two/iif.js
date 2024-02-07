// IIFE is used to remove the polluation from the global scope

// named IIFE

(function chai() {
    console.log("I am named IIFE")
})();

// how to write two IIFE function one by one. for writing a two IIFE one by one we need to end first function with semi-colon then write second one

// IIFE function

(() => {
    console.log("un named IIFE")
})();

// parameter IIFE

((name) => {
    console.log(name)
})("Akash kumar");