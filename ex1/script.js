function getRandomNumber(min,max)  {
     return Math.floor(Math.random()*(max-min+1))+min;
    // return Math.ceil(Math.random()*10)
}

let randomNumber = getRandomNumber(1,100);

console.log(randomNumber)

let num1 = prompt("guess no");

if (num1 < randomNumber ){
    alert('guess right win the game')
    console.log(num1)
}else if (num1 > randomNumber){
    alert('you lose')
    console.log(num1)
}else {
    alert('match was draw')
    console.log(num1)
}