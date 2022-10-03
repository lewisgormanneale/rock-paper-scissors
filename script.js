let playerScore = 0;
let computerScore = 0;

let roundsPlayed = 0;
let wins = 0;
let draws = 0;
let losses = 0;
let userName = ""
let userNameValid = false;

let possibleChoices = ['rock', 'paper', 'scissors'];

const scoreboard = document.querySelector('#scoreboard');
let playerScoreMessage = document.querySelector('#player-score-message');
let computerScoreMessage = document.querySelector('#computer-score-message');
let lastRoundResult = document.querySelector('#last-round-result');

const gameScreen = document.querySelector('#game-screen');
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

let playerImage = document.querySelector('#player-image');
let computerImage = document.querySelector('#computer-image');

let playerLastPlayed = document.querySelector('#player-last-played');
let computerLastPlayed = document.querySelector('#computer-last-played');

const startScreen = document.querySelector('#start-screen');
const startButton = document.querySelector('#start-button');

const gameOverScreen = document.querySelector('#game-over-screen');
const restartButton = document.querySelector('#restart-button');
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

function getUserName()  {
    let enteredName = ""
    while (userNameValid === false) { 
    enteredName = prompt(`Enter your Username under 10 characters and must start with a letter`)
    if (enteredName.length < 11  && enteredName[0].match(/[a-z]/i)) {
        userNameValid = true 
        
        capitalisedFirstLetter = enteredName[0].toUpperCase() 
        capitalisedNotNameYet = enteredName.substring(1)
        capitalisedEnteredName = capitalisedFirstLetter + capitalisedNotNameYet.toLowerCase()

        return capitalisedEnteredName
        }
    }
}

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
    if (playerScore > computerScore) {
        playerImage.src = 'images/player-winning.png';
        computerImage.src = 'images/computer-losing.png';
    } else if (computerScore > playerScore) {
        playerImage.src = 'images/player-losing.png';
        computerImage.src = 'images/computer-winning.png';
    } else {
        playerImage.src = 'images/player-neutral.png';
        computerImage.src = 'images/computer-neutral.png';
    };
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

startButton.addEventListener('click', startGame);

function startGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores(playerScore, computerScore);
    lastRoundResult.textContent = '';
    enableButtons();
    startScreen.classList.add('invisible');
    gameScreen.classList.remove('invisible');
};

function enableButtons() {
    rockButton.disabled = false;
    scissorsButton.disabled = false;
    paperButton.disabled = false;
}

function disableButtons() {
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
}

function gameOver(playerScore, computerScore) {
    disableButtons();
    let winningPlayer = '';
    if (playerScore > computerScore) {
        winningPlayer = 'Player';
    } else {
        winningPlayer = 'Computer';
    };
    gameOverScreen.classList.remove('invisible');
    gameScreen.classList.add('invisible');
    finalResult.textContent = `Final Result: ${winningPlayer} wins!`;
};

restartButton.addEventListener('click', restartGame);

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores(playerScore, computerScore);
    lastRoundResult.textContent = '';
    rockButton.disabled = false;
    scissorsButton.disabled = false;
    paperButton.disabled = false;
    gameOverScreen.classList.add('invisible');
    gameScreen.classList.remove('invisible');
};