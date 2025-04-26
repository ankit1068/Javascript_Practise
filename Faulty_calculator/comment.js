let a = prompt("enter num1")
let b = prompt("enter num2")

let random = Math.random()
console.log(random)

let addition = a + b;
let subtract = a - b
let multiple = a * b;
let divide = a / b;

if (random > 0.1) {
    // console.log("addition=", a - b)
    // console.log("divide=", a + b)
    // console.log("subtract=", a * b)
    // console.log("multiple=", a / b)
    alert(`Addition=${a - b}
           Subtract=${a * b}
           Multiple=${a / b}
           Divide=${a + b}`
    )
}
else {
    // console.log("addition=", a + b)
    // console.log("subtract=", a - b)
    // console.log("multiple=", a * b)
    // console.log("divide=", a / b)
    alert(`Addition=${a + b}
           Subtract=${a - b}
           Multiple=${a * b}
           Divide=${a / b}`
    )
}