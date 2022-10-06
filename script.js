let playerScore = 0;
let cpuScore = 0;

let roundsPlayed = 0;
let wins = 0;
let draws = 0;
let losses = 0;
let userName = "";
let userNameValid = false;

let possibleChoices = ['rock', 'paper', 'scissors'];

let playerSelection = possibleChoices[0];
let cpuSelection = possibleChoices[0];

const gameStartWindow = document.querySelector('#game-start-window');
const startMessage = document.querySelector('#start-message');
const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', startGame);

const scoreboard = document.querySelector('#scoreboard');
let playerScoreMessage = document.querySelector('#player-score-message');
let cpuScoreMessage = document.querySelector('#cpu-score-message');
let lastRoundResult = document.querySelector('#last-round-result');
let playerLastPlayed = document.querySelector('#player-last-played');
let cpuLastPlayed = document.querySelector('#cpu-last-played');

const gameOverMessage = document.querySelector('#game-over-message');
const restartButton = document.querySelector('#restart-button');
const finalResult = document.querySelector('#final-result');

const matchWindow = document.querySelector('#match-window');
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

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
    let cpuSelection = getCpuChoice();
    playRound(playerSelection, cpuSelection);
};

function getCpuChoice() {
    let cpuChoice = possibleChoices[Math.floor(Math.random() * 3)];
    return cpuChoice;
};

function getUserName()  {
    let nameEntry = document.querySelector('#name-entry')
    let enteredName = nameEntry.value;
    while (userNameValid === false) { 
    if (enteredName.length < 11  && enteredName[0].match(/[a-z]/i)) {
        userNameValid = true;
        capitalisedFirstLetter = enteredName[0].toUpperCase();
        capitalisedNameRemainder = enteredName.substring(1);
        capitalisedEnteredName = capitalisedFirstLetter + capitalisedNameRemainder.toLowerCase();
        return capitalisedEnteredName;
        }
    }
}

function playRound(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection) {
        roundResult = 'draw';
    } else if (playerSelection === possibleChoices[0]) {
        if (cpuSelection === possibleChoices[1]) {
            roundResult = 'lose';
            cpuScore++;
        } else {
            roundResult = 'win';
            playerScore++;
        };
    } else if (playerSelection === possibleChoices[1]) {
        if (cpuSelection === possibleChoices[2]) {
            roundResult = 'lose';
            cpuScore++;
        } else {
            roundResult = 'win';
            playerScore++;
        };
    } else if (playerSelection === possibleChoices[2]) {
        if (cpuSelection === possibleChoices[0]) {
            roundResult = 'lose';
            cpuScore++;
        } else {
            roundResult = 'win';
            playerScore++;
        };
    };
    updateScores(playerScore, cpuScore);
    roundResultMessage(roundResult, playerSelection, cpuSelection);
};

function updateScores(playerScore, cpuScore) {
    playerScoreMessage.textContent = `${userName} Score: ${playerScore}`;
    cpuScoreMessage.textContent = `CPU Score: ${cpuScore}`;
    if (playerScore >= 5 || cpuScore >= 5) {
        gameOver(playerScore, cpuScore);
    }
};

function roundResultMessage(roundResult, playerSelection, cpuSelection) {
    let declaredRoundResult = roundResult;
    if (playerSelection === possibleChoices[0]) {
        playerLastPlayed.removeAttribute('class');
        playerLastPlayed.classList.add('fa-solid');
        playerLastPlayed.classList.add('fa-hand-back-fist');
    } else if (playerSelection === possibleChoices[1]) {
        playerLastPlayed.removeAttribute('class');
        playerLastPlayed.classList.add('fa-solid');
        playerLastPlayed.classList.add('fa-hand');
    } else if (playerSelection === possibleChoices[2]) {
        playerLastPlayed.removeAttribute('class');
        playerLastPlayed.classList.add('fa-solid');
        playerLastPlayed.classList.add('fa-hand-scissors');
    };
    if (cpuSelection === possibleChoices[0]) {
        cpuLastPlayed.removeAttribute('class');
        cpuLastPlayed.classList.add('fa-solid');
        cpuLastPlayed.classList.add('fa-hand-back-fist');
    } else if (cpuSelection === possibleChoices[1]) {
        cpuLastPlayed.removeAttribute('class');
        cpuLastPlayed.classList.add('fa-solid');
        cpuLastPlayed.classList.add('fa-hand');
    } else if (cpuSelection === possibleChoices[2]) {
        cpuLastPlayed.removeAttribute('class');
        cpuLastPlayed.classList.add('fa-solid');
        cpuLastPlayed.classList.add('fa-hand-scissors');
    };
    if (declaredRoundResult === 'win') {
        let capitalisedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
        lastRoundResult.textContent = `You ${roundResult}! ${capitalisedPlayerSelection} beats ${cpuSelection}.`;
    } else if (declaredRoundResult === 'lose') {
        let capitalisedCpuSelection = cpuSelection[0].toUpperCase() + cpuSelection.substring(1);
        lastRoundResult.textContent = `You ${roundResult}! ${capitalisedCpuSelection} beats ${playerSelection}.`;
    } else if (declaredRoundResult === 'draw') {
        lastRoundResult.textContent = `It's a ${roundResult}! Both players played ${cpuSelection}.`;
    } else  {
        lastRoundResult.textContent = 'Error!';
    };
};

// start game functions


function startGame() {
    userName = getUserName();
    if (userName != "") {
        playerScore = 0;
        cpuScore = 0;
        updateScores(playerScore, cpuScore);
        lastRoundResult.textContent = '';
        enableButtons();
        startMessage.classList.add('invisible');
        matchWindow.classList.remove('invisible');
        scoreboard.classList.remove('invisible');
    }
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

function gameOver(playerScore, cpuScore) {
    disableButtons();
    let winningPlayer = '';
    if (playerScore > cpuScore) {
        winningPlayer = `${userName}`;
    } else {
        winningPlayer = 'CPU';
    };
    matchWindow.classList.add('invisible');
    scoreboard.classList.add('invisible');
    gameOverMessage.classList.remove('invisible');
    finalResult.textContent = `Final Result: ${winningPlayer} wins!`;
};

restartButton.addEventListener('click', restartGame);

function restartGame() {
    playerScore = 0;
    cpuScore = 0;
    playerLastPlayed.removeAttribute('class');
    cpuLastPlayed.removeAttribute('class');
    updateScores(playerScore, cpuScore);
    lastRoundResult.textContent = '';
    rockButton.disabled = false;
    scissorsButton.disabled = false;
    paperButton.disabled = false;
    gameOverMessage.classList.add('invisible');
    scoreboard.classList.remove('invisible');
    matchWindow.classList.remove('invisible');
};