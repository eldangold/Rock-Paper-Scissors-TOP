let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    switch (computerChoice) {
    case 1:
        return "rock";
        break;
    case 2:
        return "scissors";
        break;
    case 3:
        return "paper";
        break;        
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Type your choice:");
    return humanChoice;
}