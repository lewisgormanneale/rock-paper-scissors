let roundResult;
        let playerScore = 0;
        let computerScore = 0;
        
        function getComputerChoice() {
            let computerChoice = Math.floor(Math.random() * 3) + 1;
            if (computerChoice === 1) {
                return "rock"
            } else if (computerChoice === 2) {
                return "paper"
            } else {
                return "scissors"
            }
            console.log(computerChoice);
        }

        function playRound(playerSelection, computerSelection) {
            playerSelection = window.prompt("Choose Rock, Paper or Scissors");
            console.log(playerSelection);
            computerSelection = getComputerChoice();
            console.log(computerSelection);
            if (playerSelection === computerSelection) {
                roundResult = "draw";
                return "It's a Draw!";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                roundResult = "win";
                playerScore++;
                return "You Win! Rock beats Scissors"
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                roundResult = "loss";
                computerScore++;
                return "You Lose! Paper beats Rock"
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                roundResult = "win";
                playerScore++;
                return "You Win! Scissors beats Paper"
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                roundResult = "loss";
                computerScore++;
                return "You Lose! Rock beats Scissors"
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                roundResult = "win";
                playerScore++;
                return "You Win! Paper beats Rock" 
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                roundResult = "loss";
                computerScore++;
                return "You Lose! Scissors beats Paper"
            } else {
                console.log("error");
            }
        }



/*        function game() {
            for (let i = 0; i < 5; i++) {
                playRound();
                console.log(roundResult)
                console.log(playerScore, computerScore);
            }
            console.log(`Final Score: Player - ${playerScore}, Computer - ${computerScore}`);
        } */