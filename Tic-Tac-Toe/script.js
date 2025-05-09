console.log("hello anuj");

let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let msgcontainer = document.querySelector(".main-container")
let newbtn = document.querySelector("#new-btn")
let newmsg = document.querySelector(".msg")

let turnO = true//player X,playerO

const resetgame = () =>{
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide")
}

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [2, 5, 8],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click");//jfsnv
        if (turnO) {
            box.innerText = "O"
            turnO = false
            // ducument.querySelector(".box").backgroun
        } else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;

        checkwinner();
    })
})

const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) =>{
   newmsg.innerText = `winner ${winner}`
   msgcontainer.classList.remove("hide")
disabledboxes()
}

const checkwinner = () => {
    for (pattern of winpattern) {
        //     console.log(pattern[0],pattern[1],pattern[2]);
        //     console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "", pos2val != "", pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner",pos1val)//not neccessary
                showwinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);