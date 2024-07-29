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

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (computerChoice === humanChoice) {
            console.log("Tie");
        }
    
        else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")
         ) {
            console.log("You win!",humanChoice,"beats",computerChoice);  
        }
    
        else {
            console.log("You lose!",computerChoice,"beats",humanChoice);
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}