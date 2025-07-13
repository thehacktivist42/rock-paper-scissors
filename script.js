function getComputerChoice() {
    let choice = Math.random();
    if (0 <= choice <= 0.333333) {
        return "rock";
    }
    if (0.3333334 <= choice <= 0.666666){
        return "paper";
    }
    return "scissors";
}


let humanScore = 0, computerScore = 0;
let computerScoreDiv = document.querySelector(".computer-score");
let humanScoreDiv = document.querySelector(".human-score");
let resultDiv = document.querySelector(".result");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        resultDiv.textContent = "Round tied!";
    }
    else {
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
            resultDiv.textContent = "You win this round! The computer loses!";
            humanScore++;
            humanScoreDiv.textContent = `Human Score: ${humanScore}`;
        }
        else {
            resultDiv.textContent = "Hard luck! You lose this round!";
            computerScore++;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
        }
    }
    if (humanScore == 5) {
        alert("Congratulations! You have won the game!");
    }
    else if (computerScore == 5) {
        alert("Hard luck! You have lost the game!")
    }
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.querySelector("#paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));