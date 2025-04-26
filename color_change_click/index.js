const container = document.querySelector("#container")

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")



console.log(box1)
console.log(box2)
console.log(box3)


box1.addEventListener("click", function () {
    container.style.background = "blue"
    box1.style.background = "white"
    box1.addEventListener("mouseleave", function () {
        container.style.background = "white"
        box1.style.background = "blue"
    })
})

box2.addEventListener("click", function () {
    container.style.background = "yellow"
    box2.style.background = "white"
})
box2.addEventListener("mouseleave", function () {
    container.style.background = "white"
    box2.style.background = "yellow"
})

box3.addEventListener("click", function () {
    container.style.background = "green"
    box3.style.background = "white"
})
box3.addEventListener("mouseleave", function () {
    container.style.background = "white"
    box3.style.background = "green"
})

box4.addEventListener("click", function () {
    container.style.background = "red"
    box4.style.background = "white"
})
box4.addEventListener("mouseleave", function () {
    container.style.background = "white"
    box4.style.background = "red"
})
