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