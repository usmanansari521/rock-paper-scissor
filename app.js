let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const gameDraw = () =>{
    message.innerText = "Game Draw. Play again!"
    message.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You Win :) Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    } else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        message.innerText = `You lose :( ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    //generate Computer's choice
    const computerChoice = generateComputerChoice();
    console.log("computer choice =", computerChoice);

    if(userChoice === computerChoice){
        //game draw
        gameDraw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //computer's choice = paper, scissors
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
             //computer's choice = rock, scissors
             userWin = computerChoice === "scissors" ? false : true;
        } else{
             //computer's choice = paper, rock
             userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});