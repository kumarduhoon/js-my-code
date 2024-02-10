const buttons = document.querySelectorAll(".button");
const colorbody = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (e.target.id === "red") {
            colorbody.style.backgroundColor = e.target.id
        }
        if (e.target.id === "white") {
            colorbody.style.backgroundColor = e.target.id
        } if (e.target.id === "green") {
            colorbody.style.backgroundColor = e.target.id
        }
        if (e.target.id === "yellow") {
            colorbody.style.backgroundColor = e.target.id
        }
    })
})

