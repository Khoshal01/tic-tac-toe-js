let boxes = document.querySelectorAll(".box")
let resetButton = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let mainHide = document.querySelector(".main-hide");
let trunO = true;

mainHide.classList.remove("main-hide");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        if (trunO){
            box.innerText = "O";
            trunO = false;
        } else {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;
        checkWinner();
    })

    
})

const showWinner = (winner) =>{
    msg.innerText = 'Congratulations, Winner is ' + winner;
    msgContainer.classList.remove("hide");
    mainHide.classList.add("main-hide");
    disableBoxes();

}


const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
    }
}

const resetBoxes = ()=> {
    for(let box of boxes){
        box.innerText = "";
    }
}


const checkWinner =()=>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner");
                showWinner(pos1Val);
            }
            
        }
    }
}

resetButton.addEventListener("click",()=> {
   resetGame();
})

newGameBtn.addEventListener("click",()=> {
    mainHide.classList.remove("main-hide");
     msgContainer.classList.add("hide");
    resetGame();
})


const resetGame = ()=> {
    trunO = true;
    enableBoxes();
    resetBoxes();

}



