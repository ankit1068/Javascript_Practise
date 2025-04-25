let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg")
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")
// const reset = document.querySelector(".reset")
// const container = document.querySelector(".container")


const gencompchoice = () => {
    const option = ["rock", "paper", "scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx]
}

const drawgame = () => {
    console.log("the game was draw");
    msg.innerText = "match was  draw";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userwin ,userchoice , compchoice) =>{
    if(userwin){
        userscore++
        userscorepara.innerText = userscore ;
        console.log("you win ");
        msg.innerText = `you win. your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }else {
        compscore++
        compscorepara.innerText = compscore ;
        console.log("you lose");
        msg.innerText = `you lose. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice ) => {
    console.log("user choice = ", userchoice)
    //gentrate computer game
    const compchoice = gencompchoice();
    console.log("compchoice = ", compchoice)

    //Draw Game
    if (userchoice === compchoice){
        drawgame()
    }else {
        let userwin = true;
        if(userchoice === "rock"){
             //scissors , paper 
             userwin = compchoice === "paper" ? false : true ;
        } else if (userchoice === "paper" ){
            //rock , scissors 
            userwin = compchoice === "rock" ?  true : false ;
        }else {
            //paper , rock 
            userwin = compchoice === "rock" ? false : true ;
        }
        showWinner(userwin  , userchoice , compchoice)
    }
}


choices.forEach((choice) => {
    // console.log(choice) // they have print all the div
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choices was clicked", userchoice) //they have use in playgame() function
        playgame(userchoice)
    })
})

// container.addEventListener("click",function(){
    // container.innerHTML=""
// })