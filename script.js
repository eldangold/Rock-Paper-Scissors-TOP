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
    let humanChoice = prompt("Type your choice:").toLowerCase();
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
            humanScore++;
        }
    
        else {
            console.log("You lose!",computerChoice,"beats",humanChoice);
            computerScore++;
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

///for (let i = 0; i < 5; i++) {
    playGame();
///    }

if (computerScore>humanScore) {
    console.log("You lose! You have", humanScore, "vs", computerScore, "by computer!");
}

else if (computerScore<humanScore) {
    console.log("You win! You have", humanScore, "vs", computerScore, "by computer!")
}

else {
    console.log("It's a tie!")
}