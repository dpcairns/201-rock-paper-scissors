//imports functions
import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';
//starts and plays the games
const playButton = document.getElementById('play-rps');

//states that change
const computerChoice = document.getElementById('rps-computer-choice');
const numWins = document.getElementById('wins');
const totalGames = document.getElementById('total-games');
const resultMessage = document.getElementById('result-message');

//resets game and counts resets
const resetButton = document.getElementById('reset-rps');
const resetCounter = document.getElementById('reset-counter');

//initializing
let userWins = 0;
let gamesPlayed = 0;
let numResets = 0;


playButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');
    computerChoice.style.visibility = 'visible';
    if (userChoice === null){
        resultMessage.textContent = 'What, don\'t you know you have to pick one to play?';
        return;
    }
    let playerThrow = userChoice.value;
    let computerThrow = getRandomThrow();
    if (computerThrow === 'rock') {
        computerChoice.src = 'https://i.imgur.com/W5TfSf1.png';
    } else if (computerThrow === 'paper') {
        computerChoice.src = 'https://i.imgur.com/uCYuHSX.png';
    } else {
        computerChoice.src = 'https://i.imgur.com/uNa201T.png';
    }
    let gameResult = checkResult(playerThrow, computerThrow);
    if (gameResult === 'win'){
        resultMessage.textContent = 'Nice job, you won!';
        userWins++;
    } else if (gameResult === 'draw') {
        resultMessage.textContent = 'It\'s a tie, go again!';
    } else {
        resultMessage.textContent = 'Better luck next time!'; 
    }
    gamesPlayed++;
    numWins.textContent = userWins;
    totalGames.textContent = gamesPlayed;


});

resetButton.addEventListener('click', () => {
    userWins = 0;
    gamesPlayed = 0;
    numWins.textContent = '0';
    totalGames.textContent = '0';
    numResets++;
    resetCounter.textContent = numResets;



});