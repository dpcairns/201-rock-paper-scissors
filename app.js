//imports functions
import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';
//starts and plays the games
const playButton = document.getElementById('play-rps');

//states that change
const computerChoice = document.getElementById('rps-computer-choice');
const numWins = document.getElementById('wins');
const totalGames = document.getElementById('total-games');

//resets game
//const resetButton = document.getElementById('reset-button');

//initializing
let userWins = 0;
let gamesPlayed = 0;


playButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');
    let playerThrow = userChoice.value;
    let computerThrow = getRandomThrow();
    computerChoice.style.visibility = 'visible';
    if (computerThrow === 'rock') {
        computerChoice.src = 'https://i.imgur.com/W5TfSf1.png';
    } else if (computerThrow === 'paper') {
        computerChoice.src = 'https://i.imgur.com/uCYuHSX.png';
    } else {
        computerChoice.src = 'https://i.imgur.com/uNa201T.png';
    }
    console.log(computerChoice.src);
    let gameResult = checkResult(playerThrow, computerThrow);
    if (gameResult === 'win'){
        userWins++;
    }

    numWins.textContent = userWins;
    totalGames.textContent = gamesPlayed++;


});
