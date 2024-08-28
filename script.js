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
document.getElementById("rock").addEventListener("click", humanClick);
document.getElementById("paper").addEventListener("click", humanClick);
document.getElementById("scissors").addEventListener("click", humanClick);

    function playRound(humanChoice, computerChoice) {
        if (computerChoice === humanChoice) {
            console.log("Tie");
            document.getElementById("currentResults").textContent = "Tie!";
        }
    
        else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")
         ) {
            console.log("You win!",humanChoice,"beats",computerChoice);
            document.getElementById("currentResults").textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
    
        else {
            console.log("You lose!",computerChoice,"beats",humanChoice);
            document.getElementById("currentResults").textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        document.getElementById("roundResults").textContent = `Human: ${humanScore} VS Computer ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                document.getElementById("roundResults").textContent = `You won the game! Resetting the game...`;
            }
            else if (computerScore === 5) {
                document.getElementById("roundResults").textContent = `Computer won the game! Resetting the game...`;
            }
            else {
                document.getElementById("roundResults").textContent = `It's a tie! Resetting the game...`;
            }
            setTimeout(resetGame, 3000);
        }
    }

function humanClick(e) {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("currentResults").textContent = "";
    document.getElementById("roundResults").textContent = "";
}