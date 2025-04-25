let boxes = document.querySelectorAll(".box")

let turnO = true;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked")
        if (turnO) {
            box.innerText = "O"
            turnO = false
        } else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
    })
});