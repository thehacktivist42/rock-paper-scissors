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

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock/paper/scissors):");
    return choice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("Round tied!");
    }
    else {
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
            console.log("You win this round! The computer loses!");
            humanScore++;
        }
        else {
            console.log("Hard luck! You lose this round!")
            computerScore++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        alert("Congratulations! You have won the game!");
    }
    else if (humanScore == computerScore) {
        alert("The game has been tied.");
    }
    else {
        alert("Hard luck! The computer has won the game!");
    }
}
playGame()