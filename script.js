let playerScore = 0;
let computerScore = 0;

const scoreboard = document.querySelector('#scoreboard');
let playerScoreMessage = document.querySelector('#player-score-message');
let computerScoreMessage = document.querySelector('#computer-score-message');
let lastRoundResult = document.querySelector('#last-round-result');

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

rockButton.addEventListener('click', () => {
    console.log("rock clicked")
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    console.log("paper clicked")
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    console.log("scissors clicked")
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        roundResult = "draw";
        console.log(roundResult)
        roundResultMessage(roundResult, playerSelection, computerSelection);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult = "win";
        playerScore++;
        updateScores(playerScore, computerScore)
        roundResultMessage(roundResult, playerSelection, computerSelection);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult = "lose";
        computerScore++;
        updateScores(playerScore, computerScore)
        roundResultMessage(roundResult, playerSelection, computerSelection);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult = "win";
        playerScore++;
        updateScores(playerScore, computerScore)
        roundResultMessage(roundResult, playerSelection, computerSelection);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult = "lose";
        computerScore++;
        updateScores(playerScore, computerScore)
        roundResultMessage(roundResult, playerSelection, computerSelection);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult = "win";
        playerScore++;
        updateScores(playerScore, computerScore)
        roundResultMessage(roundResult, playerSelection, computerSelection);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult = "lose";
        computerScore++;
        updateScores(playerScore, computerScore)
        roundResultMessage(roundResult, playerSelection, computerSelection);
    } else {
        console.log("error");}
}

function updateScores(playerScore, computerScore) {
    playerScoreMessage.textContent = `Player Score = ${playerScore}`;
    computerScoreMessage.textContent = `Computer Score = ${computerScore}`;
}

function roundResultMessage(roundResult, playerSelection, computerSelection) {
    let declaredRoundResult = roundResult;
    if (declaredRoundResult = "win") {
        let capitalisedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
        lastRoundResult.textContent = `You ${roundResult}! ${capitalisedPlayerSelection} beats ${computerSelection}.`
    } else if (declaredRoundResult = "lose") {
        let capitalisedComputerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1);
        lastRoundResult.textContent = `You ${roundResult}! ${capitalisedComputerSelection} beats ${playerSelection}.`
    } else if (declaredRoundResult = "draw") {
        lastRoundResult.textContent = `It's a ${roundResult}! Both players played ${computerSelection}.`
    } else  {
        lastRoundResult.textContent = "Error!"
    };
}