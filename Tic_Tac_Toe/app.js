let boxes = document.querySelectorAll(".button");
let restBtn = document.getElementById("reset-btn");
let newBtn = document.getElementById("new-btn");
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turnO = true;

const resetGame=()=>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log("btn clixk");
        if (turnO) {
            box.innerHTML = "O";
            box.style.color="red";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            box.style.color="black";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//showing a winner
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations!winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
}

//for checking a winner and give msg
const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }

    }
}
newBtn.addEventListener('click',resetGame);
restBtn.addEventListener('click',resetGame);

