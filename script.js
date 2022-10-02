let playerScore = 0;
let computerScore = 0;

let possibleChoices = ['rock', 'paper', 'scissors'];

const scoreboard = document.querySelector('#scoreboard');
let playerScoreMessage = document.querySelector('#player-score-message');
let computerScoreMessage = document.querySelector('#computer-score-message');
let lastRoundResult = document.querySelector('#last-round-result');

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const gameOverScreen = document.querySelector('#game-over-screen');
const finalResult = document.querySelector('#final-result');

rockButton.addEventListener('click', function() {
    choiceClicked(possibleChoices[0])
});
paperButton.addEventListener('click', function() {
    choiceClicked(possibleChoices[1])
});
scissorsButton.addEventListener('click', function() {
    choiceClicked(possibleChoices[2])
});

function choiceClicked(selection) {
    let playerSelection = selection;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
};

function getComputerChoice() {
    let computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult = 'draw';
    } else if (playerSelection === possibleChoices[0]) {
        if (computerSelection === possibleChoices[1]) {
            roundResult = 'lose';
            computerScore++;
        } else {
            roundResult = 'win';
            playerScore++;
        };
    } else if (playerSelection === possibleChoices[1]) {
        if (computerSelection === possibleChoices[2]) {
            roundResult = 'lose';
            computerScore++;
        } else {
            roundResult = 'win';
            playerScore++;
        };
    } else if (playerSelection === possibleChoices[2]) {
        if (computerSelection === possibleChoices[0]) {
            roundResult = 'lose';
            computerScore++;
        } else {
            roundResult = 'win';
            playerScore++;
        };
    };
    updateScores(playerScore, computerScore);
    roundResultMessage(roundResult, playerSelection, computerSelection);
};

function updateScores(playerScore, computerScore) {
    playerScoreMessage.textContent = `Player Score = ${playerScore}`;
    computerScoreMessage.textContent = `Computer Score = ${computerScore}`;
    if (playerScore >= 5 || computerScore >= 5) {
        gameOver(playerScore, computerScore);
    }
};

function roundResultMessage(roundResult, playerSelection, computerSelection) {
    let declaredRoundResult = roundResult;
    if (declaredRoundResult === 'win') {
        let capitalisedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
        lastRoundResult.textContent = `You ${roundResult}! ${capitalisedPlayerSelection} beats ${computerSelection}.`;
    } else if (declaredRoundResult === 'lose') {
        let capitalisedComputerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1);
        lastRoundResult.textContent = `You ${roundResult}! ${capitalisedComputerSelection} beats ${playerSelection}.`;
    } else if (declaredRoundResult === 'draw') {
        lastRoundResult.textContent = `It's a ${roundResult}! Both players played ${computerSelection}.`;
    } else  {
        lastRoundResult.textContent = 'Error!';
    };
};

function gameOver(playerScore, computerScore) {
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
    let winningPlayer = '';
    if (playerScore > computerScore) {
        winningPlayer = 'Player';
    } else {
        winningPlayer = 'Computer';
    };
    gameOverScreen.classList.remove('invisible');
    finalResult.textContent = `Final Result: ${winningPlayer} wins!`;
};

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores(playerScore, computerScore);
    lastRoundResult.textContent = '';
    rockButton.disabled = false;
    scissorsButton.disabled = false;
    paperButton.disabled = false;
    gameOverScreen.classList.add('invisible');
};