console.log('anuj')

let A = Math.random()
let a = prompt("enter first no")
let c = prompt("enter operation no")
let b = prompt("enter second no")
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (A>0.1){
    console.log(`the result will be ${a}  ${c}  ${b}`)
    alert(`the result will be ${eval(`${a} ${c} ${b}`)}`)
}else {
    c = obj[c]
      console.log(`the result will be ${a} ${c}  ${b}`)
    alert(`the result will be ${eval(`${a} ${c} ${b}`)}`)
}