/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

// Possible Bonus Features:
// CPU play
// Show score per win 1
// Displaying player names 
// Timer per turn that will pick a random square for you
// Undo/Redo
// Themes
// Game Over screen/Restart 1
// Extra styling

let turn = "X"
let playCount = 0
let targetedSqr = 0
let msgDisplay = document.querySelector("#message")
let player1Wins = 0
let player2Wins = 0
let round = 1
let sqrs
let undolastPosition
let undoTurn

// let sqrDisplay = document.querySelectorAll('.sqr')

msgDisplay.innerText = "Player 1 Turn >> X"
let player1Disp = document.querySelector('#player1wins')
let player2Disp = document.querySelector('#player2wins')
let again = document.querySelector('#again')
let reset = document.querySelector('#reset')
let undo = document.querySelector('#undo')

player1Disp.innerText = `X Player 1 = ${player1Wins}`
player2Disp.innerText = `O Player 2 = ${player2Wins}`

reset.addEventListener('click', () => {
    //console.log("test1")
    round = 1
    playCount = 0
    turn = "X"
    sqrs.forEach((eachSqr) => {
        eachSqr.innerText = ""
    })
    player1Wins = 0
    player2Wins = 0
    player1Disp.innerText = `X Player 1  = ${player1Wins}`
    player2Disp.innerText = `O Player 2 = ${player2Wins}`
    msgDisplay.innerText = "Player 1 Turn >> X"
}
)

undo.addEventListener('click',() =>{
if(turn!==""){
    turn=undoTurn
    sqrs[undolastPosition].innerText=""
}
else {console.log(msgDisplay.innerText = "Too late to Undo! Play again and Enjoy!")}

})

again.addEventListener('click', () => {
    //console.log("test2")
    round = 1
    playCount = 0
    turn = "X"
    sqrs.forEach((eachSqr) => {
        eachSqr.innerText = ""
    })
    msgDisplay.innerText = "Player 1 Turn >> X"
}
)


if (round === 1 && turn !== "") {
    sqrs = document.querySelectorAll('.sqr')

    sqrs.forEach((eachSqr) => {
        eachSqr.addEventListener('click', (playEvent) => {
            console.log(playEvent.target.id)
            targetedSqr = playEvent.target.id
        }
        )
    })

    const fullBoard = document.querySelector('.board')

    fullBoard.addEventListener('click', (playEvent) => {

        if (sqrs[playEvent.target.id].innerText !== "X" && sqrs[playEvent.target.id].innerText !== "O" && turn !== "") {
            console.log("this" + sqrs[playEvent.target.id])
            //console.log("test3")
            sqrs[playEvent.target.id].innerText = turn
            undolastPosition=playEvent.target.id
            undoTurn=turn
            console.log(targetedSqr)
            playCount += 1


            if (sqrs[0].innerText === "X" && sqrs[1].innerText === "X" && sqrs[2].innerText === "X" ||
                sqrs[3].innerText === "X" && sqrs[4].innerText === "X" && sqrs[5].innerText === "X" ||
                sqrs[6].innerText === "X" && sqrs[7].innerText === "X" && sqrs[8].innerText === "X" ||
                sqrs[0].innerText === "X" && sqrs[3].innerText === "X" && sqrs[6].innerText === "X" ||
                sqrs[1].innerText === "X" && sqrs[4].innerText === "X" && sqrs[7].innerText === "X" ||
                sqrs[2].innerText === "X" && sqrs[5].innerText === "X" && sqrs[8].innerText === "X" ||
                sqrs[2].innerText === "X" && sqrs[4].innerText === "X" && sqrs[6].innerText === "X" ||
                sqrs[0].innerText === "X" && sqrs[4].innerText === "X" && sqrs[8].innerText === "X"


            ) {
                msgDisplay.innerText = "Player 1 X is the Winner"
                turn = ""
                player1Wins += 1
                // playAgain()
                round = 0
                player1Disp.innerText = `X Player 1  = ${player1Wins}`

            }
            else if (sqrs[0].innerText === "O" && sqrs[1].innerText === "O" && sqrs[2].innerText === "O" ||
                sqrs[3].innerText === "O" && sqrs[4].innerText === "O" && sqrs[5].innerText === "O" ||
                sqrs[6].innerText === "O" && sqrs[7].innerText === "O" && sqrs[8].innerText === "O" ||
                sqrs[0].innerText === "O" && sqrs[3].innerText === "O" && sqrs[6].innerText === "O" ||
                sqrs[1].innerText === "O" && sqrs[4].innerText === "O" && sqrs[7].innerText === "O" ||
                sqrs[2].innerText === "O" && sqrs[5].innerText === "O" && sqrs[8].innerText === "O" ||
                sqrs[2].innerText === "O" && sqrs[4].innerText === "O" && sqrs[6].innerText === "O" ||
                sqrs[0].innerText === "O" && sqrs[4].innerText === "O" && sqrs[8].innerText === "O"


            ) {
                msgDisplay.innerText = "Player 2 O is the Winner"
                turn = ""
                player2Wins += 1
                round = 0
                player2Disp.innerText = `O Player 2  = ${player2Wins}`
                //  playAgain()

            }
            else if (playCount === 9) {
                msgDisplay.innerText = "Tie"
                turn = ""
                round = 0
                //  playAgain()


            }
            else if (turn === "X") {
                turn = "O"
                msgDisplay.innerText = "Player 2 Turn >> O"
            }
            else if (turn === "O") {
                turn = "X"
                msgDisplay.innerText = "Player 1 Turn >> X"
            }

        }

        else if (turn !== "" && (sqrs[playEvent.target.id].innerText === "X" || sqrs[playEvent.target.id].innerText === "O")) {
            msgDisplay.innerText = `Please Play Again in An Emplty Cell - Its ${turn} turn`
        }

    })

}

